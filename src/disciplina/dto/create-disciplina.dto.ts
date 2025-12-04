import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDisciplinaDto {
  @ApiProperty({ example: 'MAT101' })
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @ApiProperty({ example: 'Cálculo I' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 60 })
  @IsInt()
  @Min(1)
  cargaHoraria: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  cursoId: number;
}