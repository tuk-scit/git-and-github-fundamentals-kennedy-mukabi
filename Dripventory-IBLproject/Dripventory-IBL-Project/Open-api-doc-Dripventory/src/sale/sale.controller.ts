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
import { CreateSaleDto } from './dto/create-sale.dto';
import { Sale } from './entities';
@ApiTags('Sale')
@Controller('sales')
export class SaleController {
  @ApiOperation({ summary: 'find all sales' })
  @ApiOkResponse({ description: 'success', type: [Sale] })
  @Get()
  findAllSales() {
    return;
  }
  @ApiOperation({ summary: 'find one sale' })
  @ApiParam({ name: 'saleId' })
  @ApiOkResponse({ description: 'success', type: Sale })
  @Get(':saleId')
  findOneSale() {
    return;
  }

  @ApiOperation({ summary: 'create a new sale' })
  @ApiCreatedResponse({ description: 'success', type: Sale })
  @Post()
  createSale(@Body() createSaleDto: CreateSaleDto) {
    return;
  }

  @ApiOperation({ summary: 'update one sale' })
  @ApiParam({ name: 'saleId' })
  @ApiBody({ type: UpdateCustomerDto })
  @ApiOkResponse({ description: 'success', type: Sale })
  @Patch(':saleId')
  updateSale(@Body() UpdateCustomerDto: UpdateCustomerDto) {}

  @ApiOperation({ summary: 'Delete one sale' })
  @ApiParam({ name: 'saleId' })
  @ApiOkResponse({ description: 'success', type: Sale })
  @Delete(':saleId')
  deleteSale() {}
}
