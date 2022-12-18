import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty({ type: String, example: 'Air jordan 1' })
  productName: string;
  @ApiProperty({ type: String, example: 'diuyeriuh' })
  productId: string;
  @ApiProperty({ type: Number, example: '1' })
  quantity: number;
  @ApiProperty({ type: String, example: '2022-11-01' })
  saleDate: string;
  @ApiProperty({ type: Number, example: '15000' })
  sellingPrice: number;
  @ApiProperty({ type: String, example: 'dripventory' })
  customerInstagramHandle: string;
}
