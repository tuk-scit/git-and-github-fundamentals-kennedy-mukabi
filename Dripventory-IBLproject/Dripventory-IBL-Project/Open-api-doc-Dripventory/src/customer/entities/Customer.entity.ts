import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ type: String, example: 'ertiohjoihd' })
  _id: string;

  @ApiProperty({ type: String, example: 'Arthur Manyonge' })
  name: string;
  @ApiProperty({ type: String, example: 'dripventory' })
  instagramHandle: string;
  @ApiProperty({ type: String, example: 'pickup mtaani' })
  preferredDeliveryOption: string;
  @ApiProperty({ type: String, example: 'dfadfjdakh' })
  createdAt: string;
  @ApiProperty({ type: String, example: 'efadfdfiouyh' })
  updateAt: string;
}
