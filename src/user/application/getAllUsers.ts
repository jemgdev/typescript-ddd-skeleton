import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserPrismaRepository from '../infrastructure/prisma/UserPrismaRepository'
import UserRepository from '../domain/UserRepository'
import User from '../domain/User'
const repository: UserRepository = new UserMongooseRepository()

const getAllUsers = async (): Promise<User[]> => {
  const users = await repository.getAllUsers()
  return users
}

export default getAllUsers
