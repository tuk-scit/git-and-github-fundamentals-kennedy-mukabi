import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from './entities';
@ApiTags('Product')
@Controller('products')
export class ProductController {
  @ApiOperation({ summary: 'Find all products' })
  @ApiOkResponse({ description: 'Success', type: [Product] })
  @Get()
  findAllProducts() {
    return;
  }

  @ApiOperation({ summary: 'Find one product' })
  @ApiParam({ name: 'productId' })
  @ApiOkResponse({ description: 'Success', type: Product })
  @Get(':productId')
  findOneProduct() {
    return;
  }

  @ApiOperation({
    summary: 'create a new product',
  })
  @ApiBody({ type: CreateProductDto })
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @Post()
  createProduct(@Body() CreateProductDto: CreateProductDto) {
    return;
  }

  @ApiOperation({ summary: 'Update one product' })
  @ApiParam({ name: 'productId' })
  @ApiBody({ type: UpdateProductDto })
  @ApiOkResponse({ description: 'Success', type: Product })
  @Patch(':productId')
  updateProduct() {
    return;
  }

  @ApiOperation({ summary: 'Delete one product' })
  @ApiParam({ name: 'productId' })
  @ApiOkResponse({ description: 'success', type: Product })
  @Delete(':productId')
  deleteProduct() {
    return;
  }
}
