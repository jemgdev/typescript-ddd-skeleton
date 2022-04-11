import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
prisma.$connect()
  .then(() => console.log('Prisma DB is connected'))
  .catch(error => console.log(error))

export default prisma