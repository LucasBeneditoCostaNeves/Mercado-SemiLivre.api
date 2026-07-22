import 'dotenv/config'
import { PrismaClient } from '.prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const USER_PROFILE_ID = 'ae5f335f-dd71-4e9c-a520-3f434979ae8f'
const SELLER_PROFILE_ID = process.env.SELLER_PROFILE_ID

async function main() {
  await prisma.profile.upsert({
    where: { id: USER_PROFILE_ID },
    update: {},
    create: {
      id: USER_PROFILE_ID,
      name: 'usuario',
    },
  })

  console.log(`Seed concluído — perfil "usuario" com id ${USER_PROFILE_ID}`)

  if (!SELLER_PROFILE_ID) {
    console.warn('SELLER_PROFILE_ID não configurado — perfil "fornecedor" não foi semeado.')
    return
  }

  await prisma.profile.upsert({
    where: { id: SELLER_PROFILE_ID },
    update: {},
    create: {
      id: SELLER_PROFILE_ID,
      name: 'fornecedor',
    },
  })

  console.log(`Seed concluído — perfil "fornecedor" com id ${SELLER_PROFILE_ID}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
