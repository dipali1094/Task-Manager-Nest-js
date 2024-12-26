import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createProductDto: CreateProductDto): Promise<Product>{
        return this.productService.create(createProductDto);
    }
    // async create(){
    //   const createProductDto = {
    //     name:'Abbcs',
    //     price: 5000,
    //     description:'asdaaf'

    //   }
    //   return this.productService.create(createProductDto);
    // }

    @Get()
    @UseGuards(JwtAuthGuard) 
    findAll(): Promise<Product[]> {
      return this.productService.findAll();
    }
}
 