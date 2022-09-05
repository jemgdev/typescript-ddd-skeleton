import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import userController from './controllers/user.controller'
import '../user/infrastructure/mongoose/connection'
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Hello world with 8 copies'
  })
})

app.use('/api/users', userController)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
