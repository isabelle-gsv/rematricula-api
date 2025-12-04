import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciplina } from '../entities/disciplina.entity';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { PreRequisito } from 'src/entities/prerequisito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina, PreRequisito])],
  providers: [DisciplinaService],
  controllers: [DisciplinaController],
  exports: [DisciplinaService],
})
export class DisciplinaModule {}
