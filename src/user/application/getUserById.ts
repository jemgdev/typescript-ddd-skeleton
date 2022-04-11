import UserMongooseRepository from '../infrastructure/mongoose/UserMongooseRepository'
import UserPrismaRepository from '../infrastructure/prisma/UserPrismaRepository'
import UserRepository from '../domain/UserRepository'
import User from '../domain/User'
const repository: UserRepository = new UserMongooseRepository()

const getUserById = async (userId: string): Promise<User> => {
  const user = await repository.getUserById(userId)
  return user
}

export default getUserById
