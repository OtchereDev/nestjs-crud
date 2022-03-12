import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class CreateItemDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}

