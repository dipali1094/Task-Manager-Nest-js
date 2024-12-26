import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { filter } from 'rxjs';
import { ProductFilterInput } from './dto/product-filter.input';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductsInput } from './dto/create-products.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor (private readonly productService: ProductService){}
  // private products: Product[] = [
  //   { id: 1, name: 'Laptop', price: 1000, description: 'A high-end laptop' },
  //   { id: 2, name: 'Phone', price: 500, description: 'A smartphone' },
  // ];

  @Query(() => [Product])  // Return type is an array of Product objects
  async products(
    @Args('filter', { nullable: true }) filter: ProductFilterInput, 
  ): Promise<Product[]> {
    return this.productService.getProducts(filter);
  }

  // Define a query to get a single product by id and name
  @Query(()=> Product ,{ name: 'product' })
  async getProductByIdAndName(@Args('id',{ type: ()=> Int}) id: number, @Args('name',{ nullable: true }) name: string): Promise<Product> {
    return this.productService.getProductByIdAndName(id,name)
  }

  @Mutation(()=> Product) // Define a mutation to create a product
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,): Promise<Product> {
      return this.productService.createProduct(createProductInput);
    }

    @Mutation(() => [Product])  // Return an array of products
    async createProducts(
      @Args('createProductsInput', { type: () => CreateProductsInput }) createProductsInput: CreateProductsInput,
    ): Promise<Product[]> {
      // Access the 'products' field from CreateProductsInput
      return this.productService.createProducts(createProductsInput.products);  // Pass the array of products
    }
}
