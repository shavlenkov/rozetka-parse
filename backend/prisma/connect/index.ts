import { PrismaClient, Prisma } from '@prisma/client'

const connect = new PrismaClient()

export { connect, Prisma }
