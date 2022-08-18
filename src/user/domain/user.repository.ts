import UserModel from './user.model'

export default interface UserRepository {
  saveUser({ name, lastname, email, age }: { name: string, lastname: string, email: string, age: number }): Promise<UserModel | undefined | null>
  getUserById(userId: string): Promise<UserModel | undefined | null>
  getAllUsers(): Promise<UserModel[] | undefined | null>
  updateUserById(userId: string, user: UserModel): Promise<UserModel | undefined | null>
  deleteUserById(userId: string): Promise<UserModel | undefined | null>
}
