import IUser from "../../domain/IUser";
import User from "./models/User";
import UserRepository from "../../domain/UserRepository";

export default class UserMongooseRepository implements UserRepository {
  async save(user: IUser): Promise<void> {
    const newUser = new User (user)
    await newUser.save()
  }
  async getUserById(userId: string): Promise<IUser> {
    const user = await User.findById(userId)
    return user
  }
  async getAllUsers(): Promise<IUser[]> {
    return await User.find({})
  }
}