import express from 'express'

const router = express.Router()

router.get('/admin', (req, res) => {
    console.log("App use 2. üzenet")
    res.send('<h2>Admin</h2>')

})

router.get('/admin/product', (req, res) => {
    console.log("App use 2. üzenet")
    res.send('<form action="/api/v1/admin/product" method="POST"><input type="text" name="username"/> <button type="submit">Send</button>')

})

router.post('/admin/product', (req, res)=>{
    console.log('POST üzenet');
    res.send("<h1>asd</h1>")
})

export default router