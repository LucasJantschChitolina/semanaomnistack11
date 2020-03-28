const express = require ('express');

const OngController = require ('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);




//dar o funcionamento da rota principal == apenas barra
//passar uma função como segundo parâmetro
//rota é o conjunto completo, o que vem depois da barra é o recurso


//exportar a variável de dentro de um arquivo
module.exports = routes;