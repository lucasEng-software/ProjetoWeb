# Aplicação back-end e Front-end utiizando os Princípios SOLID

## Tecnologias
### Javascript
### Typescript
### Node.js
### React.js
### Next.js
### MySQL --> Postgress em uma proxima versão

##Status da API -
* 1: Status 200 (OK)
* 2: Status 201 (Created)
* 3: Status 409 (Conflict) - quando houver um usuário ja cadastrado
* 4: Status 404 (Not Found) 
* 5: Status 400 (Bad Request)

## Rotas já desenvolvidas:
Cadastro de usuario, busca por id, busca por nome, busca geral, delete de usuario por id.
POST http://localhost:3333/usuarios
GET http://localhost:3333/usuarios/3623a989-0845-4bce-8021-b5c3bac43e16
GET http://localhost:3333/usuarios/nome/FULANO DE TAAL
GET http://localhost:3333/usuarios/
DELETE http://localhost:3333/usuarios/f5724a34-029b-42d0-aa3c-3386a855a258

#Status: Em desenvolvimento

## 1º Etapa: Desenvolver o Back-end: Uma API CRUD que esteja conexa a um banco de dados MySQL utilizando os principios SOLID E NODE.JS
###  No momento foi criado as rotas de Criação, Busca geral, Delete, Busca por ID e nome de usuários utilizando os principios SOLID e Node.js
### A aplicação está conexa a um Banco de dados Mysql.

## Para proximas etapas:
###Ampliar a regra de negócio, implementar novas excessões, update e trocar o banco para POSTGRESS

# O front-end está sendo desenvolvieod em uma outra branch com React.js e ainda não subiu aqui no git.
