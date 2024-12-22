import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService : UserService
    ){}

    // Create New User 
    @Post()
    async createNewUser () {
        const userData = {
            username: 'Dips',
            password: 'Dipa123',
            email: 'Dip112s@gmail.com',
        }
        this.userService.create(userData.username,userData.password,userData.email);
    }

    // Get all users
    @Get()
    async findAllUsers() : Promise<User[]> {
        return this.userService.getAllUsers();
    }

    // Get user by ID
    @Get(':id')
    async findOneUser(@Param('id') id:number) : Promise<User> {
        return this.userService.findOne(id);
    }
}
