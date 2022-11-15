const { Router } = require('express')

const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/LoginController')
const ProductController =  require('../controllers/ProductsController')

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Olá Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUseryId)

routes.post('/login', LoginController.createSession)

routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProduct)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:user_id/:cart_id')

module.exports = routes