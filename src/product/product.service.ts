import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductFilterInput } from './dto/product-filter.input';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)  // Injects the repository for the Product entity, enabling interaction with the database.
    private productRepository: Repository<Product>,
  ) {}

  // Method to retrieve all products from the database
  // async getAllProducts(): Promise<Product[]> { // Fetches all products from the database.
  //   return this.productRepository.find(); // Retrieves all products
  // }

  // async getProducts(filter: ProductFilterInput): Promise<Product[]> {
  //   const where = {} as any;
  //   if (filter.id) where.id = filter.id;
  //   if (filter.name) where.name = filter.name;
  //   return this.productRepository.find({
  //     where,
  //   });
  // }

  // Method to get all products
  async getProducts(filter?: any): Promise<Product[]> {
    // If filter is passed, apply it to the query (e.g., filtering by name or id)
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (filter?.id) {
      queryBuilder.andWhere('product.id = :id', { id: filter.id });
    }

    if (filter?.name) {
      queryBuilder.andWhere('product.name LIKE :name', { name: `%${filter.name}%` });
    }

    // Execute the query and return the results
    return await queryBuilder.getMany();
  }

  // Method to retrieve a single product by id and name
  async getProductByIdAndName(id: number, name: string): Promise<Product> {
    return this.productRepository.findOne({
       where : { id, name }
    }); // Retrieves a product by id and name
  }

  // Method to create a new product
  async createProduct(createProductInput: CreateProductInput) : Promise<Product> {
    const product =  this.productRepository.create(createProductInput);
    return await this.productRepository.save(product);
  }

  // Return an array of products
  async createProducts(createProductInput: CreateProductInput[]) : Promise<Product[]> {
    const products =  this.productRepository.create(createProductInput); // Create multiple product entities
    return await this.productRepository.save(products);  // Save all products at once
  }
}
