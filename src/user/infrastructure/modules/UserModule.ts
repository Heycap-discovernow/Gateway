import { Module } from "@nestjs/common";

import { TransportModule } from "src/user/infrastructure/modules/TransportModule";
import { CreateContactController } from "src/user/infrastructure/adapters/controllers/contacts/CreateContact";

import { CreateUserController } from "src/user/infrastructure/adapters/controllers/user/CreateUserController";
import { LoginController } from "src/user/infrastructure/adapters/controllers/user/LoginController";
import { SearchUserController } from "src/user/infrastructure/adapters/controllers/user/SearchUserController";
import { UpdateUserController } from "src/user/infrastructure/adapters/controllers/user/UpdateUserController";
import { UpdatePasswordController } from "../adapters/controllers/user/UpdatePasswordController";
import { DeleteUserController } from "src/user/infrastructure/adapters/controllers/user/DeleteUserController";
import { ChangePasswordController } from "src/user/infrastructure/adapters/controllers/user/ChangePasswordController";
import { MultiFactorAuthenticationController } from "src/user/infrastructure/adapters/controllers/user/MultiFactorAuthenticationController";
import { ForgotPasswordController } from "src/user/infrastructure/adapters/controllers/user/EmailForgotPasswordController";
import { VerifyNumberController } from "src/user/infrastructure/adapters/controllers/user/VerifyNumberController";
import { VerifyCodeForgotPasswordController } from "src/user/infrastructure/adapters/controllers/user/VerifyCodeForgotPasswordController";
import { ResendCodeController } from "src/user/infrastructure/adapters/controllers/user/ResendCodeController";


@Module({
    imports: [TransportModule],
    controllers: [
        CreateContactController,
        CreateUserController, 
        LoginController,
        SearchUserController,
        UpdateUserController,
        UpdatePasswordController,
        DeleteUserController,
        ChangePasswordController,
        MultiFactorAuthenticationController,
        ForgotPasswordController,
        VerifyNumberController,
        VerifyCodeForgotPasswordController,
        ResendCodeController
    ]
})
export class UserModule{}