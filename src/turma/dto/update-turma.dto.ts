import { IsOptional, IsString, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTurmaDto {
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  disciplinaId?: number;

  @ApiPropertyOptional({ example: 'Prof. Carlos Silva' })
  @IsOptional()
  @IsString()
  professor?: string;

  @ApiPropertyOptional({ example: 'Segunda 10:00-12:00, Quarta 14:00-16:00' })
  @IsOptional()
  @IsString()
  horario?: string;

  @ApiPropertyOptional({ example: '2024.1' })
  @IsOptional()
  @IsString()
  periodoLetivo?: string;
}