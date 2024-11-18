import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/AppModule'
import { PORT, API_VERSION } from 'src/config';
import { RpcCustomExceptionFilter } from 'src/exceptions/ExceptionFilter';

async function bootstrap() {
  const logger = new Logger('GATEWAY');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/${API_VERSION}`);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );
  app.useGlobalFilters(new RpcCustomExceptionFilter());
  await app.listen(PORT);
  logger.log(`Gateway is running on: ${PORT}`);
}
bootstrap();
