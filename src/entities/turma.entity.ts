import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Disciplina } from './disciplina.entity';
import { MatriculaAluno } from './matricula.entity';

@Entity()
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Disciplina, (d) => d.turmas, { eager: true })
  disciplina: Disciplina;

  @Column()
  professor: string;

  @Column()
  horario: string;

  @Column()
  periodoLetivo: string;

  // relação com matrículas
  @OneToMany(() => MatriculaAluno, (m) => m.turma)
  matriculas: MatriculaAluno[];
}
