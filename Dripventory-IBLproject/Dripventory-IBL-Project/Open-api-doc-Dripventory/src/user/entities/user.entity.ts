import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: String, example: 'reuiyhrnkj' })
  _id: string;

  @ApiProperty({ type: String, example: 'Arthur Manyonge' })
  userName: string;

  @ApiProperty({ type: String, example: 'arthur@gmail.com' })
  email: string;

  @ApiProperty({ type: String, example: 'password' })
  password: string;
}
