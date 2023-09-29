import express from 'express'
import dotenv from 'dotenv'

import carRoutes from './routes/carRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/cars', carRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
