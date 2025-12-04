import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaAluno } from '../entities/matricula.entity';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { Aluno } from '../entities/aluno.entity';
import { Turma } from '../entities/turma.entity';
import { PreRequisito } from '../entities/prerequisito.entity';
import { Disciplina } from '../entities/disciplina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatriculaAluno, Aluno, Turma, PreRequisito, Disciplina])],
  controllers: [MatriculaController],
  providers: [MatriculaService],
})
export class MatriculaModule {}
