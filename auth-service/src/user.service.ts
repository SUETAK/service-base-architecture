import {Injectable} from "@nestjs/common";
import {UserRepository} from "./repository/user-repository";
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async createUser(user: CreateUserDto) {
    await this.userRepository.createUser(user.name, user.email)
  }
}
