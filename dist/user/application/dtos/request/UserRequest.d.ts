import { ContactRequestDTO } from 'src/user/application/dtos/request/ContactRequestDTO';
export declare class UserRequest {
    contact: ContactRequestDTO;
    nickname: string;
    password: string;
    avatar?: string | null;
    constructor(contact: ContactRequestDTO, nickname: string, password: string, avatar?: string | null);
}
