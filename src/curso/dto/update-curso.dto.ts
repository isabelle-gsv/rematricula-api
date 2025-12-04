import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCursoDto {
  @ApiPropertyOptional({ example: 'Engenharia de Software' })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ example: 'ESOFT' })
  @IsOptional()
  @IsString()
  sigla?: string;
}