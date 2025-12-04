import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { CreateAlunoDto } from './dto/crete-aluno.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private repo: Repository<Aluno>,
  ) {}

  async create(dto: CreateAlunoDto) {
    // verifica duplicidade por email ou matricula
    const exists = await this.repo.findOne({ where: [{ email: dto.email }, { matricula: dto.matricula }] });
    if (exists) throw new ConflictException('Email ou matrícula já cadastrado');
    const aluno = this.repo.create(dto as any);
    return this.repo.save(aluno);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async update(id: number, data: Partial<Aluno>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }

  async validateCredentials(email: string, senha: string) {
    const aluno = await this.findByEmail(email);
    if (!aluno) return null;
    const match = await bcrypt.compare(senha, aluno.senha);
    if (!match) return null;
    return aluno;
  }
}
