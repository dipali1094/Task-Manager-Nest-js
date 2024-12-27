import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { User1Module } from './user1/user1.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),  // Automatically generates the schema file
      playground: true,  // Enables GraphQL Playground for testing
      sortSchema: true // Optionally, sort the schema for better readability
    }),
    DatabaseModule, UserModule, ProductModule, 
    AuthModule, User1Module
  ]
})
export class AppModule {}
