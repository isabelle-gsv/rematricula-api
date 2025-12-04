import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Disciplina } from './disciplina.entity';

// Entidade PreRequisito: faz associação N:N entre disciplinas (via entidade)
@Entity()
export class PreRequisito {
  @PrimaryGeneratedColumn()
  id: number;

  // disciplina que exige o pré-requisito
  @ManyToOne(() => Disciplina, (d) => d.prerequisitos, { eager: true })
  disciplina: Disciplina;

  // disciplina que é pré-requisito
  @ManyToOne(() => Disciplina, (d) => d.requisitosDe, { eager: true })
  disciplinaRequisito: Disciplina;
}
