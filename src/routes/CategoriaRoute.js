const {Router} = require('express');
const CategoriaRoute = Router();
const CategoriaController = require('../controllers/CategoriaController');


CategoriaRoute.post('/categorias',CategoriaController.store);
CategoriaRoute.put('/categorias/:id',CategoriaController.update);
module.exports = CategoriaRoute;