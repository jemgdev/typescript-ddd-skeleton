import dotenv from 'dotenv'
dotenv.config()
import '../user/infrastructure/mongoose/connection'
import getAllUsers from '../user/application/getAllUsers'

const run = async () => {
  console.log(await getAllUsers())
}

run()
