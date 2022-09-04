import dotenv from 'dotenv'
dotenv.config()
import '../user/infrastructure/mongoose/connection'
import UserUseCase from '../user/application/user.usecase'
import UserMongooseRepository from '../user/infrastructure/mongoose/user.mongoose.repository'
import UserPrismaRepository from '../user/infrastructure/prisma/user.prisma.repository'

const userUseCase = new UserUseCase(new UserPrismaRepository())

const run = async () => {
  console.log(await userUseCase.listUsers())
}

run()
