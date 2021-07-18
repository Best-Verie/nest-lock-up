import { createUser } from './Dto/createUser';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor( @Inject('User_MODEL')
    private usersModel: Model<UserInterface>,
){}

async createUser(createUserDto: createUser): Promise<createUser> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }


async getAllUsers(){
    return this.usersModel.find();
}
}
