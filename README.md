# Customers API

## Tecnologias Usadas
**NodeJS** - Plataforma para rodar código JavaScript fora dos navegadores;
**TypeScript** - Superset do JavaScript para adicionar tipagem dinâmica à linguagem;
**Fastify** - Microframework para facilitar o desenvolvimento de REST API's;
**Knex** - Query Builder muito usado no Node para fazer consultas a bancos de dados.
**Vitest** - Ferramenta para criação de testes automatizados fortemente integrada ao TypeScript;
**Zod** - Biblioteca de validação de dados fortemente integrada ao TypeScript;
**Docker** - Gerenciador de *containers* para facilitar os processos de ambiente da aplicação;
**Sqlite** - Simples banco de dados relacional o qual não tem a necessidade de fazer autenticação, muito usado em etapas de desenvolvimento.

## Validação de CPF
O código que criei para validar CPF está no arquivo ```src/utils/cpf.ts```, lá dividi as responsabilidades em funções (uma para validar o formato, outra para validar os dígitos no algoritmo...). Para ser algo 100% manual não usei Regex ou alguma biblioteca de terceiros.

## Como subir a aplicação usando Docker

1 - Crie um arquivo *.env* baseado no *.env.example* e um *.env.test* baseado no *.env.test.example*, ambos na raíz do projeto. Pode manter os mesmos valores das variáveis por enquanto.

2 - A única mudança que precisa ser feita para subir usando o *Docker* é alterar o valor da variável *HOST* no arquivo *.env* para o nome do *container*, ou seja ```HOST="customers_api"```

3 - Feito isso, basta abrir o terminal no caminho do projeto e executar ```docker-compose up --build -d```

4 - Ao finalizar todos os *steps*, a aplicação estará hospedada no endereço http://localhost:8000 e um banco *sqlite* será criado dentro do *container*, já com as migrações feitas.

## Como executar os testes automatizados usando Docker

1 - Após ter hospedado a aplicação com docker, isso é possível.

2 - No terminal, execute ```docker-compose exec app npm run test```
