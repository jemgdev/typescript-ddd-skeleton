import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserRepository from '../domain/UserRepository'
import User from '../domain/User'
const repository: UserRepository = new UserMongooseRepository()

const createUser = async (user: User) => {
  user.name = `${user.name} + DDD`
  await repository.save(user)
}

export default createUser
