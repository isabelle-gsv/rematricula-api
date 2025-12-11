import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Disciplina } from './disciplina.entity';
import { MatriculaAluno } from './matricula.entity';


@Entity()
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Disciplina, (d) => d.turmas, { eager: true })
  @JoinColumn({name:'disciplinaId'})
  disciplina: Disciplina;

  @Column()
  disciplinaId:number;

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
