import express from 'express'
import userRoutes from './Routes/user.js'

const app = express()
const PORT = 3000

app.use(userRoutes)

app.use((req, res,nex) => {
    if(err){
        console.log('Error: '+ expressrr)
        res.status(err.status || 500).send("Hiba történt:" + err)
    }
    next();
})

app.listen(PORT, () =>
    console.log("Fut a szerver a http://localhost:3000/ porton"))