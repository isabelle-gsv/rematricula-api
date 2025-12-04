import { IsString, IsEmail, MinLength, IsOptional, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAlunoDto {
  @ApiPropertyOptional({ example: 'João Silva Santos' })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ example: 'RA123456' })
  @IsOptional()
  @IsString()
  matricula?: string;

  @ApiPropertyOptional({ example: 'joao.novo@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'novaSenha123' })
  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  cursoId?: number;
}