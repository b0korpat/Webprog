import express from 'express'

const router = express.Router()


router.get('/', (req, res) => {
    console.log("App use 1. üzenet")
    res.send("<h2>Root page</h2>")
})

router.get('api/admin/product', (req, res) => {
    console.log("Product page betöltve")
    res.send('<h1>Product</h1>')
})

export default router