import {Injectable} from "@nestjs/common";
import {UserRepository} from "./repository/UserRepository";
import {User} from "./model/User";
import {ulid} from 'ulid';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async createUser(user: CreateUserDto) {
    await this.userRepository.createUser(user.name, user.email)
  }
}
