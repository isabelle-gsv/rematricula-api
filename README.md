📘 API de Rematrícula — NestJS + TypeORM + JWT + Google OAuth2

Este projeto implementa uma API RESTful completa para um sistema acadêmico de rematrícula, desenvolvida em NestJS com MySQL, JWT, Google OAuth2, TypeORM e documentação completa com Swagger.

A aplicação permite que alunos autenticados consultem disciplinas, turmas, pré-requisitos e realizem sua rematrícula de forma validada conforme regras acadêmicas.

📌 Tecnologias Utilizadas
Tecnologia  	            Uso
NestJS      	            Estrutura principal da API
TypeORM	                    ORM para acesso ao MySQL
MySQL	                    Banco relacional
JWT (passport-jwt)	        Autenticação por token
Google OAuth2	            Login alternativo usando conta Google
Swagger	                    Documentação automática
class-validator	            Validação de dados
bcrypt	                    Criptografia de senha


📚 CRUDs Implementados

✔ CRUD completo de Aluno
✔ CRUD completo de Curso
✔ CRUD completo de Disciplina
✔ CRUD completo de Turma
✔ CRUD completo de PreRequisito

Inclui:
DTOs com validação
Services
Controllers
Regras lógicas aplicadas
Integração com TypeORM

📘 Matrícula e Rematrícula
A API implementa:
✔ Listagem de turmas por período letivo
GET /turma/periodo/:periodoLetivo

✔ Inscrição do aluno autenticado em uma turma
POST /matricula/aluno

✔ Validação completa de pré-requisitos

Antes de matricular:
Verifica se o aluno já cursou os pré-requisitos
Verifica duplicidade de matrícula
Verifica conflitos de horário
Registra data, situação e vínculo

✔ Listagem de disciplinas cursadas
GET /matricula/cursadas

📄 Swagger
A documentação Swagger é gerada automaticamente:

URL:
http://localhost:3000/api

⚙ Instalação
1. Clone o repositório
git clone https://github.com/usuario/projeto-rematricula.git

2. Instale as dependências
npm install

3. Configure o arquivo .env

Crie um:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=senha
DB_NAME=rematricula

JWT_SECRET=seu_token_seguro_aqui

GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxx
GOOGLE_REDIRECT=http://localhost:3000/auth/google/redirect

4. Execute as migrations
npm run typeorm:run

5. Inicie o servidor
npm run start:dev

🛠 Scripts Recomendados no package.json
"typeorm:run": "typeorm-ts-node-commonjs migration:run -d src/config/data-source.ts",
"typeorm:generate": "typeorm-ts-node-commonjs migration:generate -d src/config/data-source.ts src/migrations/new",
"typeorm:create": "typeorm-ts-node-commonjs migration:create src/migrations/new"

📌 Fluxo Completo de Rematrícula
Aluno faz login 🡒 recebe JWT
Consulta turmas disponíveis
Escolhe uma turma

API verifica:
Pré-requisitos cursados
Sem choques de horários
Sem matrícula duplicada

Matrícula registrada com:
data atual
vínculo aluno–turma
Aluno pode consultar disciplinas já cursadas

🎯 Requisitos Atendidos
✔ Autenticação interna (JWT)
✔ Autenticação externa (Google OAuth2)
✔ CRUD completo de todas as entidades
✔ Validação de pré-requisitos
✔ Sistema de matrícula completo
✔ Listagens de período e cursos concluídos
✔ MySQL + TypeORM + Migrations
✔ Swagger completo
✔ DTOs + validação class-validator