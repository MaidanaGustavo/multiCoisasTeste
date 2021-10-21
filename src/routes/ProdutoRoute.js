const {Router} = require('express');
const ProdutoRoute = Router();
const ProdutoController = require('../controllers/ProdutoController');


ProdutoRoute.get('/produtos',ProdutoController.index);
ProdutoRoute.get('/produtos/:id',ProdutoController.show);
ProdutoRoute.post('/produtos',ProdutoController.store);
ProdutoRoute.put('/produtos/:id',ProdutoController.update);
ProdutoRoute.delete('/produtos/:id',ProdutoController.delete);

module.exports = ProdutoRoute;