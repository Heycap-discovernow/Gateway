import { ContactRequestDTO } from 'src/user/application/dtos/request/ContactRequestDTO';

export class UserRequest {
    constructor(
        public contact: ContactRequestDTO,
        public nickname: string,
        public password: string,
        public avatar?: string | null,
    ){}
}