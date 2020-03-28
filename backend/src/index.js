const express = require('express'); //importando o módulo express para a variável express, trazendo suas funcionalidades
const cors = require('cors'); 
const routes = require('./routes');


// variável que armazena a aplicação. Instancia/cria a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end;
 * POST: Criar/Cadastrar uma informação no back-end; (ex: criar um usuário)
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviado na rota após o símbolo "?" geralmente usados para filtros, paginação
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */


// mandar a aplicação ouvir a porta 3333 (quando acessa localhost.3333 acessa a aplicação)
app.listen(3333);

