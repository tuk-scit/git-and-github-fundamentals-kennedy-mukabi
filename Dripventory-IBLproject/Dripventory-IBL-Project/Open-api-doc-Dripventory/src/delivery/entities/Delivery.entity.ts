import { ApiProperty } from '@nestjs/swagger';

export class Delivery {
  @ApiProperty({ type: String, example: 'ertiohjoihd' })
  _id: string;

  @ApiProperty({ type: String, example: 'jordan 1 low' })
  productName: string;

  @ApiProperty({ type: String, example: 'difhiouhf' })
  productId: string;

  @ApiProperty({ type: String, example: '071234567' })
  customerContact: string;

  @ApiProperty({ type: String, example: 'pickup mtaani' })
  deliveryMethod: string;

  @ApiProperty({ type: String, example: 'delivered' })
  status: string;

  @ApiProperty({ type: String, example: 'dfadfjdakh' })
  createdAt: string;

  @ApiProperty({ type: String, example: 'efadfdfiouyh' })
  updateAt: string;
}
