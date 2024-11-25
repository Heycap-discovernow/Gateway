"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_KEY = exports.API_VERSION = exports.NATS_SERVER = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = Number(process.env.PORT);
exports.NATS_SERVER = process.env.NATS_SERVER;
exports.API_VERSION = process.env.API_VERSION;
exports.JWT_KEY = process.env.JWT_KEY;
//# sourceMappingURL=index.js.map