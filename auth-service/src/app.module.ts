import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserService} from "./user.service";
import {UserRepository} from "./repository/UserRepository";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, UserRepository],
})
export class AppModule {}
