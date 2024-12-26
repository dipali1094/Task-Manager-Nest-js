import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   driver: 'apollo-server-express', 
    //   autoSchemaFile: true,  // Automatically generates the schema file
    //   playground: true,  // Enables GraphQL Playground for testing
    // }),
    DatabaseModule, UserModule, ProductModule, 
    // /AuthModule
  ]
})
export class AppModule {}
