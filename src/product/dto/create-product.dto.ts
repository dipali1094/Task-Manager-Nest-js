// import { IsNotEmpty, IsString, IsDecimal,Min } from "class-validator";

// export class CreateProductDto {
//     // Name of the product, it should be a non-empty string
//     @IsString()
//     @IsNotEmpty({ message: 'Product name is required.' })
//     name :string

//     // Price of the product, it should be a positive decimal number
//     @IsDecimal()
//     @IsNotEmpty()
//     @Min(0, { message: 'Price must be a positive number.' })
//     price: number;

//     // Description of the product, it should be a string (optional)
//     @IsString()
//     @IsNotEmpty({ message: 'Product description is required.' })
//     description: string;
// }

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Decorates the class as a GraphQL Input Type
export class CreateProductDto {
  @Field() // Decorates each property as a field in GraphQL
  name: string;

  @Field(() => Int) // Explicitly define the type for non-string fields
  price: number;

  @Field()
  description: string;
}
