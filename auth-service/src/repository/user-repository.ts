import { Inject, Injectable } from '@nestjs/common';

import { ulid } from 'ulid';
import { User } from '../model/user';
import { Firestore } from '@google-cloud/firestore';


@Injectable()
export class UserRepository {
  private db: Firestore


  constructor(@Inject('FIRESTORE_INSTANCE') db: Firestore) {
    this.db = db;
  }

  async createUser(name: string, email: string) {
    const id = ulid()
    const user:User = {id , email, name}
    const writeResult = await this.db.collection('users').doc(user.id).set(user);
    console.log(`User with ID: ${id} added at: ${writeResult.writeTime.toDate()}`);
  }
}
