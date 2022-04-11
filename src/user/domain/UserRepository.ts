import User from './User'

export default interface UserRepository {
  save: (user: User) => Promise<void>
  getUserById: (userId: string) => Promise<User>
  getAllUsers: () => Promise<User[]>
}
