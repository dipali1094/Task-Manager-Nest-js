// src/product/dto/create-product.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateProductsInput {
  @Field(() => [CreateProductInput])  // Array of products
  @IsArray()
  @ValidateNested({ each: true })  // Validate each product individually
  @Type(() => CreateProductInput)  // Ensure proper transformation for validation
  products: CreateProductInput[];
}
