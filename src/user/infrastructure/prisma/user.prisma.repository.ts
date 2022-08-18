import UserEntity from '../../domain/user.entity'
import UserModel from '../../domain/user.model'
import UserRepository from '../../domain/user.repository'
import prisma from './connection'

export default class UserPrismaRepository implements UserRepository {
  async saveUser({ name, lastname, email, age }: { name: string, lastname: string, email: string, age: number }): Promise<UserEntity | undefined | null> {
    const user = new UserModel({ name, lastname, email, age })
    return await prisma.user.create({
      data: user
    })
  }

  async getUserById(userId: string): Promise<UserEntity | undefined | null> {
    return await prisma.user.findUnique({
      where: { userId }
    })
  }

  async getAllUsers(): Promise<UserModel[] | undefined | null> {
    return await prisma.user.findMany()
  }

  async updateUserById(userId: string, user: UserEntity): Promise<UserEntity> {
    return await prisma.user.update({
      data: user,
      where: { userId }
    })
  }

  async deleteUserById(userId: string): Promise<UserEntity> {
    return await prisma.user.delete({
      where: { userId }
    })
  }
}