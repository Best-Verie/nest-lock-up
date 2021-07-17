import { DatabaseModule } from './../config/database/database.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProvider } from './user.provider';

@Module({
  imports:[DatabaseModule],
  providers: [UsersService,...userProvider],
  controllers: [UsersController]
})
export class UsersModule {}
