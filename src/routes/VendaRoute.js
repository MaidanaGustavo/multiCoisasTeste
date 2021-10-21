const {Router} = require('express');
const VendaRoute = Router();
const VendaController = require('../controllers/VendaController');


VendaRoute.get('/vendas',VendaController.index);
VendaRoute.get('/vendas/:id',VendaController.show);
VendaRoute.post('/vendas',VendaController.store);
VendaRoute.put('/vendas/:id',VendaController.update);

module.exports = VendaRoute;