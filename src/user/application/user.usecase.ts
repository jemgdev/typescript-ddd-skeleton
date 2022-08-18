import UserRepository from '../domain/user.repository'
import UserModel from '../domain/user.model'

export default class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(user: UserModel) {
    const userCreated = await this.userRepository.saveUser(user)
    return userCreated
  }

  public async listUsers() {
    const users = await this.userRepository.getAllUsers()
    return users
  }

  public async getUserById(userId: string) {
    const user = await this.userRepository.getUserById(userId)
    return user
  }

  public async updateUserById(userId: string, user: UserModel) {
    const userUpdated = await this.userRepository.updateUserById(userId, user)
    return userUpdated
  }

  public async deleteUserById(userId: string) {
    await this.userRepository.deleteUserById(userId)
    return 'User has been deleted'
  }
}