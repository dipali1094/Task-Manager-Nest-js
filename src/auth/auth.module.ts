import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
