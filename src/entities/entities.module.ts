import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Aluno } from './aluno.entity';
import { Curso } from './curso.entity';
import { Disciplina } from './disciplina.entity';
import { PreRequisito } from './prerequisito.entity';
import { Turma } from './turma.entity';
import { MatriculaAluno } from './matricula.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Aluno,
      Curso,
      Disciplina,
      PreRequisito,
      Turma,
      MatriculaAluno,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
