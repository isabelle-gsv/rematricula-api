# API Rematrícula (NestJS)

API desenvolvida para o trabalho prático da disciplina — rematrícula de alunos.

## Tecnologias
- NestJS, TypeORM, MySQL, JWT, Google OAuth2
- Swagger (documentação)
- class-validator / class-transformer

## Como rodar
1. Copie `.env.example` para `.env` e ajuste as variáveis.
2. Suba o MySQL (Docker Compose ou local).
3. Instale dependências: `npm install`
4. Rodar em dev: `npm run start:dev`
5. Acesse Swagger: `http://localhost:3000/api`

## Observações
- Rotas protegidas usam Bearer Token (JWT).
- Login Google: `GET /auth/google` (abre página do Google).
