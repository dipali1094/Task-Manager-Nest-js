import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(username: string, password: string, email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findOne(id: number): Promise<User>;
}
