import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class AuthClient {
  private readonly authServiceUrl: string;

  constructor() {
    this.authServiceUrl = 'http://auth-service:3000';
  }


  async createUser() {
    const userData = {
      name: 'test',
      email: 'money-email.com',
    };
    try {
      const response = await axios.post(`${this.authServiceUrl}/users`, userData);
      return response.status;
    } catch (error) {
      console.log(`Error creating user: ${error}`);
      throw error;
    }
  }
}
