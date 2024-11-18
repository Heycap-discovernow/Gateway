import { Module } from "@nestjs/common";

import { OrderTransportModule } from "src/payment/infraestructure/modules/OrderTransport";
import { CreateOrderController } from "src/payment/infraestructure/controllers/CreateOrder";
import { GetOrderController } from "src/payment/infraestructure/controllers/getOrder";

@Module({
    imports: [OrderTransportModule],
    controllers: [CreateOrderController, GetOrderController,]
})
export class PaymentModule{}