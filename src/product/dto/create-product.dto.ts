import { IsNotEmpty, IsString, IsDecimal,Min } from "class-validator";

export class CreateProductDto {
    // Name of the product, it should be a non-empty string
    @IsString()
    @IsNotEmpty({ message: 'Product name is required.' })
    name :string

    // Price of the product, it should be a positive decimal number
    @IsDecimal()
    @IsNotEmpty()
    @Min(0, { message: 'Price must be a positive number.' })
    price: number;

    // Description of the product, it should be a string (optional)
    @IsString()
    @IsNotEmpty({ message: 'Product description is required.' })
    description: string;
}