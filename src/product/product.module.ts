import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductResolver } from './product.resolver';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService,ProductResolver],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
