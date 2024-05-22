import {Injectable} from "@nestjs/common";
import * as admin from 'firebase-admin';
import {User} from "../model/User";
import {ulid} from 'ulid';


@Injectable()
export class UserRepository {
  private db: admin.firestore.Firestore


  constructor() {
    this.db = admin.firestore();
  }

  async createUser(name: string, email: string) {
    const id = ulid()
    const user:User = {id , email, name}
    await this.db.collection('users').doc(user.id).set(user);
  }
}
