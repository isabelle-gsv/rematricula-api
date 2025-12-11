import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BeforeInsert, JoinColumn } from 'typeorm';
import { Curso } from './curso.entity';
import { MatriculaAluno } from './matricula.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  matricula: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;    

  @ManyToOne(() => Curso, (c) => c.alunos, { eager: true })
  @JoinColumn({name:'cursoId'})
  curso: Curso;

  @Column()
  cursoId:number;

  @OneToMany(() => MatriculaAluno, (m) => m.aluno)
  matriculas: MatriculaAluno[];

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
  }
}
