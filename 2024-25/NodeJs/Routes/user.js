import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    console.log("App use 1. üzenet")
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/users', (req, res) => {
    console.log("App use 2. üzenet")
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})
router.post('/create-user', (req, res) => {
    const userName = req.body.userName;
    console.log('POST üzenet ' + userName);
    res.redirect('/users')
})

export default router