import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTurmaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  disciplinaId: number;

  @ApiProperty({ example: 'Prof. Carlos Silva' })
  @IsString()
  @IsNotEmpty()
  professor: string;

  @ApiProperty({ example: 'Segunda 10:00-12:00, Quarta 14:00-16:00' })
  @IsString()
  @IsNotEmpty()
  horario: string;

  @ApiProperty({ example: '2024.1' })
  @IsString()
  @IsNotEmpty()
  periodoLetivo: string;
}