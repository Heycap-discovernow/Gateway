"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(data, success, message, error) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.error = error;
    }
    toResponseEntity() {
        return this;
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=BaseResponse.js.map