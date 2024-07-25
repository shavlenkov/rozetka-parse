import express from 'express'
import cors from 'cors'

import routerProducts from './routes/products.route'

const app = express()
const port = 3001

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: 'GET'
    })
)

app.use('/api/v1', routerProducts)

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})
