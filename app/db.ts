import { prismaInterface } from 'asasvirtuais-prisma'
import { prisma } from './prisma'
import { schema } from './schema'

export const db = prismaInterface(schema, prisma)
