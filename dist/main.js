"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const AppModule_1 = require("./AppModule");
const config_1 = require("./config");
const ExceptionFilter_1 = require("./exceptions/ExceptionFilter");
async function bootstrap() {
    const logger = new common_1.Logger('GATEWAY');
    const app = await core_1.NestFactory.create(AppModule_1.AppModule);
    app.setGlobalPrefix(`api/${config_1.API_VERSION}`);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new ExceptionFilter_1.RpcCustomExceptionFilter());
    await app.listen(config_1.PORT);
    logger.log(`Gateway is running on: ${config_1.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map