// Seed script: `pnpm db:seed`. Add realistic, industry-specific US business data here.
import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { prisma } from '../app/prisma'
import { DEMO_USERS } from '../lib/demo'

async function main() {
  for (const user of DEMO_USERS) {
    const passwordHash = await bcrypt.hash(user.password, 10)
    await prisma.user.upsert({
      where: { username: user.username },
      update: { name: user.name, role: user.role, passwordHash },
      create: { username: user.username, name: user.name, role: user.role, passwordHash },
    })
  }

  // TODO(build): seed the business tables defined in brief.md / specs.md.
}

main()
  .then(() => prisma.$disconnect())
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
