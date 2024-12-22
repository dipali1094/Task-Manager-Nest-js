import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createNewUser(): Promise<void>;
    findAllUsers(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
}
