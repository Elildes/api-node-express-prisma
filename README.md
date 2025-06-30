# Api com Node.JS, Express.JS , Prisma (ORM de banco de dados) e Typescript

API backend modelo que usa as seguintes tecnologias:

- Node.js
- Framework Express.js
- TypeScript
- Prisma ORM
- Banco de Dados SQLite

# Configurações iniciais

Primeiramente se certifique que tem o Node.js e o npm instalado:  
```
    > node -v
    > npm -v
```

## Criar o projeto básico com o gerador de Aplicativos do Express

Fazer conforme o link em [Fontes](#gerador-express)  

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

# Alterar a aplicação para Typescript

## Baixar o Typescript para o projeto
    > npm install typescript --save-dev

**Obs.**: ou instalar o [TypeScript 5.8.3 para Visual Studio (SDK)](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-583) como uma extensão do Visual Studio.
  
## Criar o tsconfig.json
    > npx tsc --init

## Configurar o arquivo tsconfig.json

Principalmente a pasta `./dist` de saída para os arquivos compilados .js.  

```
{
  "compilerOptions": {
    ...
    "outDir": "./dist",         /* Pasta de saída para os arquivos compilados .js. */
    "rootDir": "./",            /* Raiz do seu código TypeScript. */
    ...
  },
  "include": [
    "**/*.ts"                   /* Inclui todos os arquivos .ts no projeto. */
  ],
  "exclude": [
    "node_modules"              /* Exclui a pasta node_modules da compilação. */
  ]
}
```

## Adicionar dependências de desenvolvimento no package.json

Dependências de desenvolvimento são aquelas necessárias apenas para o desenvolvimento e teste do projeto, e não para a execução em produção.  

    > npm install --save-dev @types/express @types/node @types/debug @types/morgan @types/cookie-parser @types/http-errors prisma ts-node ts-node-dev typescript

**Obs.:** caso queira uma versão especifica de um pacote, indique a versão desejada como abaixo:  

    > npm install --save-dev @types/express@^4.17.21 @types/node@^20.14.10 ...

**Obs.**: este comando também poderá ser usado coma a flag `-D`:  

    > npm install -D @types/express@^4.17.21 ...

**Obs.:**  
- Caso precise atualizar algum pacote, execute o comando parecido com o abaixo.  
- O comando abaixo atualiza dois pacotes:
    
    > npm update express @types/express

## Altere os seguintes arquivos para Typescript

    > bin/www para bin/www.ts
    > app.js para app.ts

## Adicionar scripts no package.json

```
"scripts": {
    "build": "npx tsc",                               
    "start": "node dist/bin/www.js",
    "dev": "ts-node-dev --respawn --transpile-only ./bin/www.ts"
  },
```

## Criar nova estrutura de diretórios

```
.
├── bin
│   └── www.ts
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── src
│   ├── controllers
│       ├── usuarioController.ts
│   ├── routes
│       ├── usuarioRoutes.ts
│   ├── services
│       ├── usuarioService.ts
│   ├── app.js
├── views
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
├── package.json
└── tsconfig.json
```


## Alterar os arquivos 'app.ts' e 'bin/www.ts'

### Arquivo "app.ts" - inicializa a aplicação

Este arquivo é Responsável por configurar a aplicação Express (middlewares, rotas, etc.).

Alterar conforme o modelo no diretpotio `src/app.ts`.

### Arquivo bin/www.ts - servidor

Este arquivo é responsável por iniciar o servidor HTTP usando a aplicação configurada e gerenciar seu ciclo de vida (porta, tratamento de erros de servidor, desligamento gracioso).


Alterar conforme o modelo no diretpotio `bin/www.ts`.

# Rodar a aplicação API

## Rodar em desenvolvimento

Use durante o desenvolvimento para ter recarregamento automático e execução direta do TypeScript.

    > npm run dev

## Rodar antes do deploy

Antes de implantar em produção, sempre execute para compilar seu código.

    > npm run build

## Rodar em produção

Em produção, execute este comando, que executará a versão compilada em JavaScript do seu aplicativo.

    > npm run start


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

<div id='gerador-express'/>

## Fontes

[Node.JS](https://nodejs.org/en/)  
[Gerador de aplicativos do Express](https://expressjs.com/pt-br/starter/generator.html)  
[Baixar e usar o TypeScript](https://www.typescriptlang.org/download/)  
[Manual JavaScript - Mozila Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)  
[Prisma (ORM)](https://www.prisma.io/docs/getting-started/quickstart-sqlite)  
[SQLite - integração com Prisma](https://www.prisma.io/docs/orm/overview/databases/sqlite)  
[SQLite - banco de dados](https://www.sqlite.org/)  
[Criando a primeira tabela com Prisma
](https://www.youtube.com/watch?v=KjZ5RmrSptI&list=PL3rXHPXruajKEyb8OHKqJBieRtmP-Kbhx&index=8&ab_channel=Rocketseat)  
[Aprenda em 13:37: Prisma
](https://www.youtube.com/watch?v=uApCW1gcpdE&t=554s&ab_channel=Lu%C3%ADsRudge)  
