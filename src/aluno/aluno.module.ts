import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from '../entities/aluno.entity';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { Curso } from '../entities/curso.entity';
import { CursoService } from 'src/curso/curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno, Curso])],
  controllers: [AlunoController],
  providers: [AlunoService, CursoService],
  exports: [AlunoService],
})
export class AlunoModule {}
