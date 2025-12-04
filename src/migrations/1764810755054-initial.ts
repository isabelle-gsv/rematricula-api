import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1764810755054 implements MigrationInterface {
    name = 'Initial1764810755054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`curso\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`sigla\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_bb9183452195bb1ae3989cc056\` (\`sigla\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pre_requisito\` (\`id\` int NOT NULL AUTO_INCREMENT, \`disciplinaId\` int NULL, \`disciplinaRequisitoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`disciplina\` (\`id\` int NOT NULL AUTO_INCREMENT, \`codigo\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`cargaHoraria\` int NOT NULL, \`cursoId\` int NULL, UNIQUE INDEX \`IDX_273d4ded06c2b50c52e176b767\` (\`codigo\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`matricula\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`cursoId\` int NULL, UNIQUE INDEX \`IDX_d361bd841d0658620d4a3d2ff6\` (\`matricula\`), UNIQUE INDEX \`IDX_29a948302c3a739d7b20773e18\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`matricula_aluno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`situacao\` varchar(255) NOT NULL DEFAULT 'matriculado', \`dataMatricula\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`alunoId\` int NULL, \`turmaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`turma\` (\`id\` int NOT NULL AUTO_INCREMENT, \`professor\` varchar(255) NOT NULL, \`horario\` varchar(255) NOT NULL, \`periodoLetivo\` varchar(255) NOT NULL, \`disciplinaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pre_requisito\` ADD CONSTRAINT \`FK_0c215433ab3c2f1600eb437240e\` FOREIGN KEY (\`disciplinaId\`) REFERENCES \`disciplina\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pre_requisito\` ADD CONSTRAINT \`FK_fcf4cd9368db0a318a7aa1c50ba\` FOREIGN KEY (\`disciplinaRequisitoId\`) REFERENCES \`disciplina\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`disciplina\` ADD CONSTRAINT \`FK_a2178b7f4229915ad77e72c661e\` FOREIGN KEY (\`cursoId\`) REFERENCES \`curso\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_78a69c2e65e9c3fd20f1a9ce727\` FOREIGN KEY (\`cursoId\`) REFERENCES \`curso\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matricula_aluno\` ADD CONSTRAINT \`FK_8f41f2a0ecd538580996e064683\` FOREIGN KEY (\`alunoId\`) REFERENCES \`aluno\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matricula_aluno\` ADD CONSTRAINT \`FK_6e1d5eb35e12dfefd2177c6f6ea\` FOREIGN KEY (\`turmaId\`) REFERENCES \`turma\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`turma\` ADD CONSTRAINT \`FK_046e54fc87131b5c112e4db7889\` FOREIGN KEY (\`disciplinaId\`) REFERENCES \`disciplina\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`turma\` DROP FOREIGN KEY \`FK_046e54fc87131b5c112e4db7889\``);
        await queryRunner.query(`ALTER TABLE \`matricula_aluno\` DROP FOREIGN KEY \`FK_6e1d5eb35e12dfefd2177c6f6ea\``);
        await queryRunner.query(`ALTER TABLE \`matricula_aluno\` DROP FOREIGN KEY \`FK_8f41f2a0ecd538580996e064683\``);
        await queryRunner.query(`ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_78a69c2e65e9c3fd20f1a9ce727\``);
        await queryRunner.query(`ALTER TABLE \`disciplina\` DROP FOREIGN KEY \`FK_a2178b7f4229915ad77e72c661e\``);
        await queryRunner.query(`ALTER TABLE \`pre_requisito\` DROP FOREIGN KEY \`FK_fcf4cd9368db0a318a7aa1c50ba\``);
        await queryRunner.query(`ALTER TABLE \`pre_requisito\` DROP FOREIGN KEY \`FK_0c215433ab3c2f1600eb437240e\``);
        await queryRunner.query(`DROP TABLE \`turma\``);
        await queryRunner.query(`DROP TABLE \`matricula_aluno\``);
        await queryRunner.query(`DROP INDEX \`IDX_29a948302c3a739d7b20773e18\` ON \`aluno\``);
        await queryRunner.query(`DROP INDEX \`IDX_d361bd841d0658620d4a3d2ff6\` ON \`aluno\``);
        await queryRunner.query(`DROP TABLE \`aluno\``);
        await queryRunner.query(`DROP INDEX \`IDX_273d4ded06c2b50c52e176b767\` ON \`disciplina\``);
        await queryRunner.query(`DROP TABLE \`disciplina\``);
        await queryRunner.query(`DROP TABLE \`pre_requisito\``);
        await queryRunner.query(`DROP INDEX \`IDX_bb9183452195bb1ae3989cc056\` ON \`curso\``);
        await queryRunner.query(`DROP TABLE \`curso\``);
    }

}
