import getAllUsers from '../user/application/getAllUsers'
import '../user/infrastructure/mongoose/connection'

const run = async () => {
  console.log(await getAllUsers())
}

run()