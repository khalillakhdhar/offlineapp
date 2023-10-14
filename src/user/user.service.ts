/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {

    users:User[] = [];
    createOneUser(user: User)
    {
        this.users.push(user);
    }
    getAllUsers()
    {
        return this.users;
    }
    deleteOneUser(index: number)
    {
        this.users.splice(index, 1);
    }   
    getOneUser(index: number)
    {
        return this.users[index];
    }
}
