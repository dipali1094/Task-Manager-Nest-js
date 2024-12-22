import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
    ){}

    // Create new user
    async create(username:string,password: string, email: string) : Promise<User> {
        const user = this.userRepository.create({ username, password, email });
        return await this.userRepository.save(user);
    }

    // Find all users
    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
      }

    // Get user by ID
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({
            where :{ id }
        });
    }
}
