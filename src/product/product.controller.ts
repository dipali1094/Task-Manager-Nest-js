import { Body, Controller, Post, Get, UseGuards, Query } from '@nestjs/common';
import { ProductService } from './product.service';
// import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { filter } from 'rxjs';
import { ProductFilterInput } from './dto/product-filter.input';
import { CreateProductsInput } from './dto/create-products.input';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService) {}

    // REST endpoint to fetch multiple products
    @Get()
    async getProduct(@Query() filter: ProductFilterInput): Promise<Product[]> {
      return this.productService.getProducts(filter);
    }

  // REST endpoint to create multiple products
  @Post()
  async createProducts(
    @Body() createProductsInput: CreateProductsInput,): Promise<Product[]> {
    return this.productService.createProducts(createProductsInput.products);
  }
}
 