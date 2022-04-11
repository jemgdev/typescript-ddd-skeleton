import User from '../../domain/User'
import UserRepository from '../../domain/UserRepository'
import prisma from './connection'

export default class UserPrismaRepository implements UserRepository {
  async save (user: User): Promise<void> {
    try {
      await prisma.user.create({
        data: user
      })
    } catch (error) {
      console.log(error)
    }
  }
  async getAllUsers (): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
  async getUserById (userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })
    return user
  }
}