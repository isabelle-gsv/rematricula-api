import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplina } from '../entities/disciplina.entity';
import { Repository } from 'typeorm';
import { PreRequisito } from '../entities/prerequisito.entity';

@Injectable()
export class DisciplinaService {
  constructor(
    @InjectRepository(Disciplina) private repo: Repository<Disciplina>,
    @InjectRepository(PreRequisito) private preRepo: Repository<PreRequisito>,
  ) {}

  create(data: Partial<Disciplina>) {
    const d = this.repo.create(data);
    return this.repo.save(d);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Disciplina>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  // associa pré-requisito
  async addPrerequisito(disciplinaId: number, requisitoId: number) {
    const disciplina = await this.findOne(disciplinaId);
    const requisito = await this.findOne(requisitoId);
    if (!disciplina || !requisito) throw new BadRequestException('Disciplina não encontrada');

    // evita duplicidade
    const exists = await this.preRepo.findOne({
      where: { disciplina: { id: disciplinaId }, disciplinaRequisito: { id: requisitoId } },
    });
    if (exists) throw new BadRequestException('Pré-requisito já cadastrado');

    const pr = this.preRepo.create({ disciplina, disciplinaRequisito: requisito });
    return this.preRepo.save(pr);
  }

  async removePrerequisito(id: number) {
    return this.preRepo.delete(id);
  }

  async listPrerequisitos(disciplinaId: number) {
    return this.preRepo.find({ where: { disciplina: { id: disciplinaId } } });
  }
}