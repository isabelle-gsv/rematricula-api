import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MatricularAlunoDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  turmaId: number;
}