import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCursoDto {
  @ApiProperty({ example: 'Engenharia de Software' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'ESOFT' })
  @IsString()
  @IsNotEmpty()
  sigla: string;
}