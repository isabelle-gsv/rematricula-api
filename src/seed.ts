import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CursoService } from './curso/curso.service';
import { DisciplinaService } from './disciplina/disciplina.service';
import { TurmaService } from './turma/turma.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const cursoService = app.get(CursoService);
  const disciplinaService = app.get(DisciplinaService);
  const turmaService = app.get(TurmaService);

  const curso = await cursoService.create({ nome: 'Análise e Desenvolvimento de Sistemas', sigla: 'ADS' });
  const d1 = await disciplinaService.create({ codigo: 'MAT101', nome: 'Matemática I', cargaHoraria: 60, curso });
  const d2 = await disciplinaService.create({ codigo: 'PROG101', nome: 'Programação I', cargaHoraria: 80, curso });

  await turmaService.create({ professor: 'Prof. A', horario: 'Seg 08:00', periodoLetivo: '2025.1', disciplina: d1 });
  await turmaService.create({ professor: 'Prof. B', horario: 'Ter 10:00', periodoLetivo: '2025.1', disciplina: d2 });

  console.log('Seed executado');
  await app.close();
}
bootstrap();
