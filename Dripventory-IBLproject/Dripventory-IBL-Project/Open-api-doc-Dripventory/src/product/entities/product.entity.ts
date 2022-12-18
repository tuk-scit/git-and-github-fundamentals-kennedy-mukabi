import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ type: String, example: 'ertiohjoihd' })
  _id: string;

  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: Number })
  quantity: number;
  @ApiProperty({ type: Number })
  buyingPrice: number;

  @ApiProperty({ type: String })
  restockDate: string;

  @ApiProperty({ type: Number })
  sellingPrice: number;
  @ApiProperty({ type: String, example: 'dfadfjdakh' })
  createdAt: string;
  @ApiProperty({ type: String, example: 'efadfdfiouyh' })
  updateAt: string;
}
