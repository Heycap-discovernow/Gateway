import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/infrastructure/modules/UserModule';
import { PaymentModule } from 'src/payment/infraestructure/modules/PaymentModule';
import { ItinerariesModule } from 'src/itineraries/infrastructure/modules/ItinerariesModule';

@Module({
  imports: [
    UserModule, 
    PaymentModule, 
    ItinerariesModule
  ],
})
export class AppModule {}
