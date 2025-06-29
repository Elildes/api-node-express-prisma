# Configurações iniciais

## Criando o tsconfig.json
    > npx tsc --init

## Alterando o package.json
```
  ...
  "scripts": {
    "build": "npx tsc",                               
    "start": "node dist/bin/www.js",                  
    "dev": "ts-node-dev --respawn --transpile-only ./bin/www.ts"
  },
  ...
    "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.14.10",
    "@types/debug": "^4.1.12",
    "@types/morgan": "^1.9.9",
    "@types/cookie-parser": "^1.4.7",
    "@types/http-errors": "^2.0.4",
    "prisma": "^6.10.1",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.5.3"
  }
  ...
```

# Prisma ORM

## Instalar o Prisma
    > npm install prisma

## Iniciar o Prisma
    > npx prisma init

Após o a inicialização do Prisma:  
```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Run prisma dev to start a local Prisma Prisma server.
2. Define models in the schema.prisma file.
3. Run npx prisma migrate dev to migrate your local Prisma SQLite database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm
```

## Configurar o banco SQLite
    > Ver o site do prisma em: ORM > banco de dados > SQLite

## Para que o Node leia o .env

package.json:  
```
{
    ...
    "scripts": {
        ...
        "dev": "node --env-file .env"
    },
    ...
}
```

## Arquivos .prisma organizar automático

Arquivo configuração do VS Code: **{}settings.json**:
```
{
    ...
    "[prisma]": {
        "editor.formatOnSave": true
    }
}
```

## Arquivo .env

    > DATABASE_URL="file:./dev.db"

## Arquivo schema.prisma

    > Definir a estrutura do banco de dados, quais tabelas tem no banco de dados

## Executar Prisma Migrate

Faz o mapeamento dos modelos para tabelas de banco de dados.  

    > npx prisma migrate dev --name init

**Obs.**:

1. cria o arquivo `./migrations/migration.sql` com o código sql para criar as tabelas.  
2. O arquivo do banco de dados criado `./prisma/dev.db` pode ser visualizado com qualquer ferramenta de visualização de banco de dados.  

## Visualizar/manipular o banco de dados com o Prisma Studio

    > npx prisma studio

**Obs.:** visualiza o arquivo `./prisma/dev.db`.  

# Prisma Client - Fazer consultas e manipulação de dados

## Criar arquivo script.ts para enviar consultas ao BD
    > npx touch script.ts
    > npm i --save-dev @types/node      // instala tipos

**Obs.**: seguir os demais passos do manual.

# Rodar a aplicação Node com Express

## Install dependencies
    > npm install

## Rodar em desenvolvimento (com recarregamento automático):
    > npm run dev

## Para compilar o projeto (para produção):
    > npm run build

## Para iniciar o projeto compilado (para produção):
    > npm start

Em seguida carregue http://localhost:3000/ no seu navegador para acessar o aplicativo.

O aplicativo gerado possui a seguinte estrutura de diretórios:

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files

```

## Fontes

[Node.JS](https://nodejs.org/en/)  
[Gerador de aplicativos do Express](https://expressjs.com/pt-br/starter/generator.html)  
[Manual JavaScript - Mozila Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)  
[Prisma (ORM)](https://www.prisma.io/docs/getting-started/quickstart-sqlite)  
[SQLite - integração com Prisma](https://www.prisma.io/docs/orm/overview/databases/sqlite)  
[SQLite - banco de dados](https://www.sqlite.org/)  
[Manual do TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)  
[Criando a primeira tabela com Prisma
](https://www.youtube.com/watch?v=KjZ5RmrSptI&list=PL3rXHPXruajKEyb8OHKqJBieRtmP-Kbhx&index=8&ab_channel=Rocketseat)  
[Aprenda em 13:37: Prisma
](https://www.youtube.com/watch?v=uApCW1gcpdE&t=554s&ab_channel=Lu%C3%ADsRudge)  
