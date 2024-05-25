import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(){
    const response = await this.appService.createUser();
    console.log(response)
  }
}
