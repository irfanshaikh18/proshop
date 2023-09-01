import express from 'express'
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
