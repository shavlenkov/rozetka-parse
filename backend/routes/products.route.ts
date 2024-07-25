import express from 'express'
import { getProducts } from '../controllers/products.controller'

const router = express.Router()

router.route('/products').get(getProducts)

export default router
