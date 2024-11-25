export declare class BaseResponse<T> {
    private data;
    private success;
    private message?;
    private error?;
    constructor(data: T, success: boolean, message?: string, error?: string);
    toResponseEntity(): BaseResponse<T>;
}
