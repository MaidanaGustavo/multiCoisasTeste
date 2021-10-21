const {Router} = require('express');
const ClienteRoute = Router();
const ClienteController = require('../controllers/ClienteController');


ClienteRoute.get('/clientes',ClienteController.index);
ClienteRoute.get('/clientes/:id',ClienteController.show);
ClienteRoute.post('/clientes',ClienteController.store);
ClienteRoute.put('/Clientes/:id',ClienteController.update);

module.exports = ClienteRoute;