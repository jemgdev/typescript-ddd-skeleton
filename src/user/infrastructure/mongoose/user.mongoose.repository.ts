import UserModel from '../../domain/user.model'
import UserRepository from '../../domain/user.repository'
import userSchema from './models/UserSchema'

export default class UserMongooseRepository implements UserRepository {
  async saveUser ({ name, lastname, email, age }: { name: string, lastname: string, email: string, age: number }): Promise<UserModel | undefined | null> {
    const newUser = new userSchema(new UserModel({ name, lastname, email, age }))
    return newUser.save()
  }

  async getUserById (userId: string): Promise<UserModel | undefined | null> {
    const userFound = await userSchema.findOne({ userId })
    return userFound
  }

  async getAllUsers (): Promise<UserModel[] | undefined | null> {
    return await userSchema.find({})
  }

  async updateUserById(userId: string, user: UserModel): Promise<UserModel | undefined | null> {
    const userUpdated = await userSchema.findOneAndUpdate({ userId }, user, { new: true })
    return userUpdated
  }

  async deleteUserById(userId: string): Promise<UserModel | undefined | null> {
    const userDeleted = await userSchema.findOneAndRemove({ userId })
    return userDeleted
  }
}
