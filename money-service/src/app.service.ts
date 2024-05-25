import { Injectable } from '@nestjs/common';
import { AuthClient } from './client/auth-client';

@Injectable()
export class AppService {

  constructor(private authClient: AuthClient) {
  }

  async createUser(): Promise<string> {
    await this.authClient.createUser()
    return 'Created User';
  }
}
