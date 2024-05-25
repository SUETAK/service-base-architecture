import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthClient } from './client/auth-client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthClient],
})
export class AppModule {}
