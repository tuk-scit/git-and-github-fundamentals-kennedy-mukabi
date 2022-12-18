import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { type } from 'os';
import { UpdateCustomerDto } from 'src/customer/dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities';
@ApiTags('User')
@Controller('users')
export class UserController {
  @ApiOperation({ summary: 'find all users' })
  @ApiOkResponse({ description: 'success', type: [User] })
  @Get()
  findAllUsers() {
    return;
  }
  @ApiOperation({ summary: 'find one user' })
  @ApiParam({ name: 'userId' })
  @ApiOkResponse({ description: 'success', type: User })
  @Get(':userId')
  findOneUser() {
    return;
  }

  @ApiOperation({ summary: 'create a new User' })
  @ApiCreatedResponse({ description: 'success', type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return;
  }

  @ApiOperation({ summary: 'update one User' })
  @ApiParam({ name: 'userId' })
  @ApiBody({ type: UpdateCustomerDto })
  @ApiOkResponse({ description: 'success', type: User })
  @Patch(':userId')
  updateUser(@Body() UpdateCustomerDto: UpdateCustomerDto) {}

  @ApiOperation({ summary: 'Delete one User' })
  @ApiParam({ name: 'userId' })
  @ApiOkResponse({ description: 'success', type: User })
  @Delete(':userId')
  deleteUser() {
    return;
  }
}
