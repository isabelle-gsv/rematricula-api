import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaAluno } from '../entities/matricula.entity';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Turma } from '../entities/turma.entity';
import { PreRequisito } from '../entities/prerequisito.entity';

@Injectable()
export class MatriculaService {
  constructor(
    @InjectRepository(MatriculaAluno) private repo: Repository<MatriculaAluno>,
    @InjectRepository(Aluno) private alunoRepo: Repository<Aluno>,
    @InjectRepository(Turma) private turmaRepo: Repository<Turma>,
    @InjectRepository(PreRequisito) private preRepo: Repository<PreRequisito>,
  ) {}

  // matricular aluno em turma (valida pré-requisitos)
  async matricular(alunoId: number, turmaId: number) {
    const aluno = await this.alunoRepo.findOne({ where: { id: alunoId }, relations: ['matriculas'] });
    if (!aluno) throw new BadRequestException('Aluno não encontrado');
    const turma = await this.turmaRepo.findOne({ where: { id: turmaId }, relations: ['disciplina'] });
    if (!turma) throw new BadRequestException('Turma não encontrada');

    // Verificar se já matriculado, evita duplicação
    const already = await this.repo.findOne({ where: { aluno: { id: alunoId }, turma: { id: turmaId } } });
    if (already) throw new BadRequestException('Aluno já matriculado nessa turma');

    // Checar pré-requisitos: para cada requisito da disciplina, verificar se o aluno já cursou
    const reqs = await this.preRepo.find({ where: { disciplina: { id: turma.disciplina.id } }, relations: ['disciplinaRequisito'] });
    for (const r of reqs) {
      const requiredDiscId = r.disciplinaRequisito.id;
      // consideramos "cursadas" as matrículas existentes do aluno em turmas da disciplina (simplificado)
      const has = aluno.matriculas?.some(m => m.turma?.disciplina?.id === requiredDiscId);
      if (!has) throw new BadRequestException(`Pré-requisito não cumprido: disciplina ${requiredDiscId}`);
    }

    const mat = this.repo.create({ aluno, turma, situacao: 'matriculado' });
    return this.repo.save(mat);
  }

  async listByAluno(alunoId: number) {
    return this.repo.find({ where: { aluno: { id: alunoId } } });
  }

   // disciplinas já cursadas pelo aluno (simplificado: qualquer matrícula registrada)
  async disciplinasCursadas(alunoId: number) {
    const mats = await this.listByAluno(alunoId);
    const disciplinas = mats.map(m => m.turma.disciplina);
    const unique = Array.from(new Map(disciplinas.map(d => [d.id, d])).values());
    return unique;
  }
}
