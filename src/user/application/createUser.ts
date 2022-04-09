import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserRepository from '../domain/UserRepository'
import IUser from '../domain/IUser'
const repository: UserRepository = new UserMongooseRepository()

const createUser = async (user: IUser) => {
  user.name = `${user.name} + DDD`
  await repository.save(user)
}

export default createUser