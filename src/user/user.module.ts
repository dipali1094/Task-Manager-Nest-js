import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import the User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([User]) // This registers the User entity and makes UserRepository available
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
