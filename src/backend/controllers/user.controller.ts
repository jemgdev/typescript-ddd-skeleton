import { Router } from 'express'
import UserModel from '../../user/domain/user.model'
import UserUseCase from '../../user/application/user.usecase'
import UserMongooseRepository from '../../user/infrastructure/mongoose/user.mongoose.repository'
//import UserPrismaRepository from '../../user/infrastructure/prisma/user.prisma.repository'

const userRouter = Router()
const userUseCase = new UserUseCase(new UserMongooseRepository())

userRouter.post('/', async (req, res) => {
  const { name, lastname, age, email } = req.body
  try {
    const userSaved = await userUseCase.createUser(new UserModel({ name, lastname, age, email }))
    res.json(userSaved)
  } catch (error) {
    res.json({
      message: error
    })
  }
})

userRouter.get('/', async (_req, res) => {
  const users = await userUseCase.listUsers()
  res.json(users)
})

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await userUseCase.getUserById(id)
  res.json(user)
})

userRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const user = await userUseCase.deleteUserById(id)
  res.json(user)
})

userRouter.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { name, lastname, age, email } = req.body
  const userUpdated = await userUseCase.updateUserById(id, new UserModel({ name, lastname, age, email }))
  res.json(userUpdated)
})

export default userRouter
