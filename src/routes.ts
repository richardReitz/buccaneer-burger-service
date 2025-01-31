import multer from "multer"
import { isAuthenticate } from "./middlewares/isAuthenticate"
import uploadConfig from './config/multer'

import { AuthUserController } from "./controllers/users/AuthUserController"
import { CreateUserController } from "./controllers/users/CreateUserController"
import { DetailUserController } from "./controllers/users/DetailUserController"

import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { ListCategoriesController } from "./controllers/category/ListCategoriesController"

import { CreateProductController } from "./controllers/product/CreateProductController"
import { ListProductsByCategoryController } from "./controllers/product/ListProductsByCategoryController"

import { CreateOrderController } from "./controllers/order/CreateOrderController"
import { DeleteOrderController } from "./controllers/order/DeleteOrderController"
import { AddItemToOrderController } from "./controllers/order/AddItemToOrderController"
import { RemoveItemOrderController } from "./controllers/order/RemoveItemOrderController"
import { SendOrderController } from "./controllers/order/SendOrderController"
import { ListSendedOrdersController } from "./controllers/order/ListSendedOrdersController"
import { OrderDetailController } from "./controllers/order/OrderDetailController"

const express = require('express')
const router = express()

const upload = multer(uploadConfig.upload('./tmp'))

// --USER ROUTES--
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)

// --CATEGORY ROUTES--
router.post('/category', isAuthenticate, new CreateCategoryController().handle)
router.get('/categories', isAuthenticate, new ListCategoriesController().handle)

// --PRODUCT ROUTES--
router.post('/product', isAuthenticate, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticate, new ListProductsByCategoryController().handle)

// --ORDER ROUTES--
router.post('/order', isAuthenticate, new CreateOrderController().handle)
router.delete('/order', isAuthenticate, new DeleteOrderController().handle)
router.post('/order/add', isAuthenticate, new AddItemToOrderController().handle)
router.delete('/order/remove', isAuthenticate, new RemoveItemOrderController().handle)
router.put('/order/send', isAuthenticate, new SendOrderController().handle)
router.get('/orders', isAuthenticate, new ListSendedOrdersController().handle)
router.get('/order/detail', isAuthenticate, new OrderDetailController().handle)

export { router }