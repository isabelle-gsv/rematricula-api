import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMatriculaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  alunoId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  turmaId: number;

  @ApiPropertyOptional({ example: 'matriculado' })
  @IsOptional()
  @IsString()
  situacao?: string;
}