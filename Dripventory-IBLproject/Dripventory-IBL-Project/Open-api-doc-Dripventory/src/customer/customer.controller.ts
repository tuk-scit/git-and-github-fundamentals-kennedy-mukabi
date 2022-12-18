import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { Customer } from './entities';

@ApiTags('Customer')
@Controller('customers')
export class CustomerController {
  @ApiOperation({ summary: 'Find all customers' })
  @ApiOkResponse({ description: 'Success', type: [Customer] })
  @Get()
  findAllCustomers() {
    return;
  }

  @ApiOperation({ summary: 'Find one customer' })
  @ApiParam({ name: 'customerId' })
  @ApiOkResponse({ description: 'Success', type: Customer })
  @Get(':customerId')
  findOneCustomer() {
    return;
  }

  @ApiOperation({ summary: 'create a new customer' })
  @ApiBody({ type: CreateCustomerDto })
  @ApiCreatedResponse({ description: 'success', type: Customer })
  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return;
  }

  @ApiOperation({ summary: 'update a customer' })
  @ApiParam({ name: 'customerId' })
  @ApiBody({ type: UpdateCustomerDto })
  @ApiOkResponse({ description: 'success', type: Customer })
  @Patch(':customerId')
  updateCustomer() {
    return;
  }

  @ApiOperation({ summary: 'delete a customer' })
  @ApiParam({ name: 'customerId' })
  @ApiOkResponse({ description: 'success', type: Customer })
  @Delete(':customerId')
  deleteCustomer() {
    return;
  }
}
