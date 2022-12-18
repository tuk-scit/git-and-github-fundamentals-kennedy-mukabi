import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty({ type: String })
  productName: string;

  @ApiProperty({ type: String })
  productId: string;

  @ApiProperty({ type: String })
  customerContact: string;

  @ApiProperty({ type: String })
  deliveryMethod: string;

  @ApiProperty({ type: String })
  status: string;
}
