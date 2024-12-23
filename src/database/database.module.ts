import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Product } from 'src/product/product.entity';

@Global() // Marking the module as global
@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root@123',
      database: 'user',
      entities: [User, Product],
      synchronize: true
    }),
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule {}
