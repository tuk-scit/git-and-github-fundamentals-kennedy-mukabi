import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
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
}
