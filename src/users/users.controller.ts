import { createUser } from './Dto/createUser';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
@ApiTags('users')

export class UsersController {
    constructor(
        private readonly UsersService: UsersService
    ) {}
    
    @Get()
    async getAllevents(){
        return this.UsersService.getAllUsers();
    }

    @Post()
    @ApiOkResponse({
        type: createUser,
        description:'create user'
      })
    async createEventCategory(@Body() userDto: createUser){
      return this.UsersService.createUser(userDto);
    }
}
