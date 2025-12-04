import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Turma } from '../entities/turma.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurmaService {
  constructor(@InjectRepository(Turma) private repo: Repository<Turma>) {}

  create(data: Partial<Turma>) {
    const t = this.repo.create(data);
    return this.repo.save(t);
  }

  findByPeriodo(periodo: string) {
    return this.repo.find({ where: { periodoLetivo: periodo } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Turma>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}

