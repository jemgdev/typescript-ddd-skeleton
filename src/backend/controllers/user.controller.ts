import { Router } from 'express'
import createUser from '../../user/application/createUser'
import getUserById from '../../user/application/getUserById'

const userRouter = Router()

userRouter.post('/', async (req, res) => {
  const { name, lastname, age } = req.body
  await createUser({ name, lastname, age })
  res.json({
    message: 'User was saved'
  })
})

userRouter.get('/', async (req, res) => {
  const { id } = req.body
  const user = await getUserById(id)
  res.json(user)
})

export default userRouter