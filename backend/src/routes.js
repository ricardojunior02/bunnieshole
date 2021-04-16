const { Router } = require('express');

const productController = require('./controllers/ProductsController');

const routes = Router();

routes.get('/product', productController.index);
routes.post('/create', productController.store);
routes.put('/update/:_id', productController.update);
routes.delete('/delete/:_id', productController.destroy);

module.exports = routes;