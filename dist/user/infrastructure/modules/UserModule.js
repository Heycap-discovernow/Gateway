"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const TransportModule_1 = require("./TransportModule");
const CreateContact_1 = require("../adapters/controllers/contacts/CreateContact");
const VerifyNumberController_1 = require("../adapters/controllers/contacts/VerifyNumberController");
const CreateUserController_1 = require("../adapters/controllers/user/CreateUserController");
const LoginController_1 = require("../adapters/controllers/user/LoginController");
const GetByIdUser_1 = require("../adapters/controllers/user/GetByIdUser");
const SearchUserController_1 = require("../adapters/controllers/user/SearchUserController");
const UpdateUserController_1 = require("../adapters/controllers/user/UpdateUserController");
const UpdatePasswordController_1 = require("../adapters/controllers/user/UpdatePasswordController");
const DeleteUserController_1 = require("../adapters/controllers/user/DeleteUserController");
const ChangePasswordController_1 = require("../adapters/controllers/user/ChangePasswordController");
const MultiFactorAuthenticationController_1 = require("../adapters/controllers/user/MultiFactorAuthenticationController");
const EmailForgotPasswordController_1 = require("../adapters/controllers/user/EmailForgotPasswordController");
const VerifyCodeForgotPasswordController_1 = require("../adapters/controllers/user/VerifyCodeForgotPasswordController");
const ResendCodeController_1 = require("../adapters/controllers/user/ResendCodeController");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [TransportModule_1.TransportModule],
        controllers: [
            CreateContact_1.CreateContactController,
            VerifyNumberController_1.VerifyNumberController,
            CreateUserController_1.CreateUserController,
            LoginController_1.LoginController,
            GetByIdUser_1.GetUserByIdController,
            SearchUserController_1.SearchUserController,
            UpdateUserController_1.UpdateUserController,
            UpdatePasswordController_1.UpdatePasswordController,
            DeleteUserController_1.DeleteUserController,
            ChangePasswordController_1.ChangePasswordController,
            MultiFactorAuthenticationController_1.MultiFactorAuthenticationController,
            EmailForgotPasswordController_1.ForgotPasswordController,
            VerifyCodeForgotPasswordController_1.VerifyCodeForgotPasswordController,
            ResendCodeController_1.ResendCodeController
        ]
    })
], UserModule);
//# sourceMappingURL=UserModule.js.map