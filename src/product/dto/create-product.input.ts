// src/product/dto/create-product.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()  // Product name
  @IsString()
  name: string;

  @Field()  // Product description
  @IsString()
  description: string;

  @Field()  // Product price
  @IsNumber()
  price: number;
}
