# Customers API

## Tecnologias Usadas
**NodeJS** - Plataforma para rodar código JavaScript fora dos navegadores;

**TypeScript** - Superset do JavaScript para adicionar tipagem estática à linguagem;

**Fastify** - Microframework para facilitar o desenvolvimento de REST API's;

**Knex** - Query Builder muito usado no Node para fazer consultas a bancos de dados;

**Vitest** - Ferramenta para criação de testes automatizados fortemente integrada ao TypeScript;

**Zod** - Biblioteca de validação de dados fortemente integrada ao TypeScript;

**Docker** - Gerenciador de *containers* para facilitar os processos de ambiente da aplicação;

**Sqlite** - Simples banco de dados relacional o qual não tem a necessidade de fazer autenticação, muito usado em etapas de desenvolvimento.

## Validação de CPF
O código que criei para validar CPF está no arquivo ```src/utils/cpf.ts```, lá dividi as responsabilidades em funções (uma para validar o formato, outra para validar os dígitos no algoritmo...). Para ser algo 100% manual não usei Regex ou alguma biblioteca de terceiros. A principal função chamada é **validateCPF**, a qual chama outras necessárias.

## Swagger-UI

O projeto usa a interface swagger pra documentar suas rotas. O endereço de acesso é esse http://localhost:8000/documentation/

## Como subir a aplicação usando NodeJS (alternativa ao Docker)

1 - Necessário ter instalado *node* na versão *latest*

2 - Crie um arquivo *.env* baseado no *.env.example* e também um *.env.test* baseado no *.env.test.example*, ambos na raiz do projeto. Pode manter os mesmos valores das variáveis.

3 - Instale as dependências executando ```npm install```

4 - Execute as *migrations* com ```npm run knex -- migrate:latest```

5 - Suba a aplicação em modo de desenvolvimento executando ```npm run dev```

## Como executar os testes automatizados usando NodeJS

1 - Após ter preparado o ambiente da aplicação com *node*, isso é possível.

2 - No terminal, execute ```npm run test```
