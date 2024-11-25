import { Controller, Post, Inject, Body, Res, HttpStatus } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ContactRequestDTO } from "src/user/application/dtos/request/ContactRequestDTO";
import { lastValueFrom } from "rxjs";
import { Response } from "express";
import * as Opossum from 'opossum';

@Controller("/contacts")
export class CreateContactController {
  private circuitBreaker: Opossum;

  constructor(
    @Inject("USERS_TRANSPORT") private readonly client: ClientProxy,
  ) {
    // Funcion protegida por el Circuit Breaker
    const sendContactRequest = (contact: ContactRequestDTO) => {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await lastValueFrom(this.client.send('create-contact', contact));
          resolve(result);
        } catch (error) {  
          reject(error);
        }
      });
    };

    // Instancia del Circuit Breaker
    this.circuitBreaker = new Opossum(sendContactRequest, {
      timeout: 3000, // Tiempo máximo de espera antes de considerar un fallo
      errorThresholdPercentage: 50, // porcentaje de fallos permitidos antes de abrir el circuito
      resetTimeout: 10000, // Tiempo de espera antes de intentar realizar una nueva petición en estado semi-abierto
    });

    // en caso de que el circuit breaker ete abierto, fallback se ejecutará
    this.circuitBreaker.fallback(() => {
      console.error('El Circuit Breaker está abierto. Servicio no disponible.');
      return Promise.reject('Servicio no disponible temporalmente');
    });

    // Manejo de eventos del Circuit Breaker (opcional, para monitoreo)
    this.circuitBreaker.on('open', () => {
      console.warn('Circuit Breaker en estado ABIERTO');
    });

    this.circuitBreaker.on('halfOpen', () => {
      console.info('Circuit Breaker en estado SEMI-ABIERTO');
    });

    this.circuitBreaker.on('close', () => {
      console.info('Circuit Breaker en estado CERRADO');
    });
  }

  @Post("/create-contact")
  public async createContact(@Body() contact: ContactRequestDTO, @Res() res: Response) {
    try {
      const result = await this.circuitBreaker.fire(contact);
      res.status(HttpStatus.OK).json({ message: result });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error });
    }
  }
}


// import { Controller, Post, Inject, Body, Res, HttpStatus } from "@nestjs/common";
// import { ClientProxy } from "@nestjs/microservices";

// import { ContactRequestDTO } from "src/user/application/dtos/ContactRequestDTO";

// import { lastValueFrom } from "rxjs";
// import { Response } from "express";

// @Controller("/contacts")
// export class CreateContactController {
//     constructor(
//         @Inject("USERS_TRANSPORT") private readonly client: ClientProxy,
//     ){}

//     @Post("/create-contact")
//     public async createContact(@Body() contact: ContactRequestDTO, @Res() res: Response) {
//         try {
//             const result = await lastValueFrom(this.client.send('create-contact', contact));
//             res.status(HttpStatus.OK).json({ message: result });
//         } catch (error) {
//             res.status(HttpStatus.BAD_REQUEST).json({ message: error })
//         }
//     }
// }