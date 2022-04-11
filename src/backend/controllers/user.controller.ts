import { Router } from 'express'
import createUser from '../../user/application/createUser'
import getAllUsers from '../../user/application/getAllUsers'
import getUserById from '../../user/application/getUserById'

const userRouter = Router()

userRouter.post('/', async (req, res) => {
  const { name, lastname, age } = req.body
  try {
    await createUser({ name, lastname, age })
    res.json({
      message: 'User was saved'
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
  
})

userRouter.get('/all', async (_req, res) => {
  const users = await getAllUsers()
  res.json(users)
})

userRouter.get('/', async (req, res) => {
  const { id } = req.body
  const user = await getUserById(id)
  res.json(user)
})


export default userRouter
