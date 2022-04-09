import IUser from './IUser'

export default interface UserRepository {
  save(user: IUser): Promise<void>
  getUserById(userId: string): Promise<IUser>
  getAllUsers(): Promise<IUser[]>
}