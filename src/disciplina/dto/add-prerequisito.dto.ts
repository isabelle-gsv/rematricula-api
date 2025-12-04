import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddPrerequisitoDto {
  @ApiProperty({ example: 2 })
  @IsInt()
  @IsNotEmpty()
  requisitoId: number;
}
