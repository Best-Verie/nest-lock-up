// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
export class createVenue {
  @ApiProperty()
  name: string;

  @ApiProperty()
  location:string;
}