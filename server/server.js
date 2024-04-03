/* eslint-disable no-console */
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import authRoutes from '../server/routes/auth.route.js'
import userRoutes from '../server/routes/user.routes.js'
import postRoutes from '../server/routes/post.route.js'
import commentRoutes from '../server/routes/comment.route.js'
import cookieParser from 'cookie-parser'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  app.use(cookieParser())

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
  })

  app.use('/api/auth', authRoutes)
  app.use('/api/user', userRoutes)
  app.use('/api/post', postRoutes)
  app.use('/api/comment', commentRoutes)

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'

    res.status(statusCode).json({
      success: false,
      statusCode,
      message
    })
  })

  app.listen(process.env.PORT, () => {
    console.log('server is running at port 3000')
  })
}


console.log('Connecting to MongoDB CLoud Atlas...')

mongoose.connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log('connected to mongodb')
    START_SERVER()
  })
  .catch((err) => {
    console.error('Error connecting to MongoDb Atlas', err)
  })