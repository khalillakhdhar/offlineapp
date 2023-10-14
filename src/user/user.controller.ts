/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService)
    {
        //this.userService.users 
    }
    @Get()
    getUsers()
    {
        return this.userService.getAllUsers();
    }
    @Post()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUser(@Body() user: User)
    {
        this.userService.createOneUser(user);
    }
}
