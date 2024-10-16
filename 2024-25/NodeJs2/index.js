import express from 'express'
import adminRoutes from './Roots/admin.js'
import productRoutes from './Roots/product.js'

const app = express()
const PORT = 3000

app.use('/api/v1', adminRoutes, productRoutes)

app.listen(PORT, () =>
    console.log("Fut a szerver a http://localhost:3000/ porton"))