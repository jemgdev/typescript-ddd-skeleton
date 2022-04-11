import User from '../../domain/User'
import UserSchema from './models/UserSchema'
import UserRepository from '../../domain/UserRepository'

export default class UserMongooseRepository implements UserRepository {
  async save (user: User): Promise<void> {
    const newUser = new UserSchema(user)
    await newUser.save()
  }

  async getUserById (userId: string): Promise<User> {
    const user = await UserSchema.findById(userId)
    return user
  }

  async getAllUsers (): Promise<User[]> {
    return await UserSchema.find({})
  }
}
