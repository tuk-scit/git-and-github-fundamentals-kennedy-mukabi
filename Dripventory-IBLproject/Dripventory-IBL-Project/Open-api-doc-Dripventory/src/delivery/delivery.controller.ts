import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateDeliveryDto, UpdateDeliveryDto } from './dto';
import { Delivery } from './entities';

@ApiTags('Delivery')
@Controller('deliveries')
export class DeliveryController {
  @ApiOperation({ summary: 'Find all deliveries' })
  @ApiOkResponse({ description: 'Success', type: [Delivery] })
  @Get()
  findAllDeliveries() {
    return;
  }

  @ApiOperation({ summary: 'Find one Delivery' })
  @ApiParam({ name: 'deliveryId' })
  @ApiOkResponse({ description: 'Success', type: Delivery })
  @Get(':deliveryId')
  findOneDelivery() {
    return;
  }

  @ApiOperation({ summary: 'create a new Delivery' })
  @ApiBody({ type: CreateDeliveryDto })
  @ApiCreatedResponse({ description: 'success', type: Delivery })
  @Post()
  createDelivery(@Body() createDeliveryDto: CreateDeliveryDto) {
    return;
  }

  @ApiOperation({ summary: 'update a Delivery' })
  @ApiParam({ name: 'deliveryId' })
  @ApiBody({ type: UpdateDeliveryDto })
  @ApiOkResponse({ description: 'success', type: Delivery })
  @Patch(':deliveryId')
  updateDelivery() {
    return;
  }

  @ApiOperation({ summary: 'delete a Delivery' })
  @ApiParam({ name: 'deliveryId' })
  @ApiOkResponse({ description: 'success', type: Delivery })
  @Delete(':deliveryId')
  deleteDelivery() {
    return;
  }
}
