# Customers API

## Tecnologias Usadas
**NodeJS** - Plataforma para rodar código JavaScript fora dos navegadores;
**TypeScript** - Superset do JavaScript para adicionar tipagem dinâmica à linguagem;
**Fastify** - Microframework para facilitar o desenvolvimento de REST API's;
**Knex** - Query Builder muito usado no Node para fazer consultas a bancos de dados.
**Vitest** - Ferramenta para criação de testes automatizados fortemente integrada ao TypeScript;
**Zod** - Biblioteca de validação de dados fortemente integrada ao TypeScript;
**Docker** - Gerenciador de *containers* para facilitar os processos de ambiente da aplicação.

## Validação de CPF
O código que criei para validar CPF está no arquivo ```src/utils/cpf.ts```, lá dividi as responsabilidades em funções (uma para validar o formato, outra para validar os dígitos no algoritmo...). Para ser algo 100% manual não usei Regex ou alguma biblioteca de terceiros.
