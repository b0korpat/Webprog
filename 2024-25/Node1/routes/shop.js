import path from 'path'
import express from 'express'

import rootDir from '../util/rootpath.js'
import { products } from './admin.js'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  })
})

export default router