import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserRepository from '../domain/UserRepository'
import IUser from '../domain/IUser'
const repository: UserRepository = new UserMongooseRepository()

const getAllUsers = async (): Promise<IUser[]> => {
  const users = await repository.getAllUsers()
  return users
}

export default getAllUsers