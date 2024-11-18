import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/infrastructure/modules/UserModule';
import { PaymentModule } from 'src/payment/infraestructure/modules/PaymentModule';

@Module({
  imports: [UserModule, PaymentModule],
})
export class AppModule {}
