
// @ObjectType(): Makes this entity available for GraphQL.
// @Entity(): Marks it as a TypeORM entity.
// @PrimaryGeneratedColumn(): Marks the id as the primary key of the table.
// @Column(): Maps the other fields to columns in the database.

import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType() // This decorator is crucial for GraphQL
export class Product {
  @Field(() => Int) // Specify the GraphQL type for each field
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  price: number;

  @Field()
  @Column()
  description: string;
}


