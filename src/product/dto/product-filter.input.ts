
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ProductFilterInput {
  @Field(() => Int, { nullable: true })  // If you want to filter by ID, it's an integer
  id?: number;

  @Field({ nullable: true })  // If you want to filter by name, it's a string
  name?: string;
}
