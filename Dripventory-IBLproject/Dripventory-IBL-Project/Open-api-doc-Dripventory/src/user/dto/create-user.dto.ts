import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, example: 'Arthur Manyonge' })
  userName: string;

  @ApiProperty({ type: String, example: 'arthur@gmail.com' })
  email: string;

  @ApiProperty({ type: String, example: 'password' })
  password: string;
}
