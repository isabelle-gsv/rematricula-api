import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Disciplina } from './disciplina.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  sigla: string;

  @OneToMany(() => Disciplina, (d) => d.curso)
  disciplinas: Disciplina[];
  alunos: any;
}
