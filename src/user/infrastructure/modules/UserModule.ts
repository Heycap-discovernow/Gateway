import { Module } from "@nestjs/common";

import { TransportModule } from "src/user/infrastructure/modules/TransportModule";
import { CreateContactController } from "src/user/infrastructure/adapters/controllers/CreateContact";
import { VerifyNumberContactController } from "src/user/infrastructure/adapters/controllers/VerifyNumberContactController";
import { CreateUserController } from "src/user/infrastructure/adapters/controllers/CreateUserController";
import { LoginController } from "src/user/infrastructure/adapters/controllers/LoginController";

@Module({
    imports: [TransportModule],
    controllers: [
        CreateContactController,
        VerifyNumberContactController, 
        CreateUserController, 
        LoginController
    ]
})
export class UserModule{}