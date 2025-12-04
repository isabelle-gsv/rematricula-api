import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Curso } from './curso.entity';
import { PreRequisito } from './prerequisito.entity';
import { Turma } from './turma.entity';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: string;

  @Column()
  nome: string;

  @Column('int')
  cargaHoraria: number;

  @ManyToOne(() => Curso, (c) => c.disciplinas, { eager: true })
  curso: Curso;

  // pré-requisitos em que esta disciplina é alvo
  @OneToMany(() => PreRequisito, (p) => p.disciplina)
  prerequisitos: PreRequisito[];

  // turmas desta disciplina
  @OneToMany(() => Turma, (t) => t.disciplina)
  turmas: Turma[];

  // disciplinas das quais esta disciplina é requisito
  @OneToMany(() => PreRequisito, (p) => p.disciplinaRequisito)
  requisitosDe: PreRequisito[];
}
