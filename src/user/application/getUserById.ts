import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserRepository from '../domain/UserRepository'
import IUser from '../domain/IUser'
const repository: UserRepository = new UserMongooseRepository()

const getUserById = async (userId: string): Promise<IUser> => {
  const user = await repository.getUserById(userId)
  return user
}

export default getUserById