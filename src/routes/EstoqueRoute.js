const {Router} = require('express');
const EstoqueRoute = Router();
const EstoqueController = require('../controllers/EstoqueController');

EstoqueRoute.get('/estoques',EstoqueController.index);
EstoqueRoute.get('/estoques/:id',EstoqueController.show);
EstoqueRoute.post('/estoques',EstoqueController.store);
EstoqueRoute.put('/estoques/:id',EstoqueController.update);

module.exports = EstoqueRoute;