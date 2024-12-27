import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService : UserService
    ){}
    // Get user by ID
    @Get(':id')
    async findOne(@Param('username') username:string) : Promise<User> {
        return this.userService.findOne(username);
    }
}
