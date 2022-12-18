import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  instagramHandle: string;
  @ApiProperty({ type: String })
  preferredDeliveryOption: string;
}
