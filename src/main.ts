import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new HttpExceptionFilter());
  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // Enable CORS

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
