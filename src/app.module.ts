import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';

import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { TurmaModule } from './turma/turma.module';
import { MatriculaModule } from './matricula/matricula.module';
import { AuthModule } from './auth/auth.module';

import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,

    // Módulos da aplicação
    AlunoModule,
    CursoModule,
    DisciplinaModule,
    TurmaModule,
    MatriculaModule,
    AuthModule,

    // Módulo que registra TODAS as entidades
    EntitiesModule,
  ],
})
export class AppModule {}
