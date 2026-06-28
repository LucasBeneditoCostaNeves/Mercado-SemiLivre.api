import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

const USER_PROFILE_ID = 'ae5f335f-dd71-4e9c-a520-3f434979ae8f'

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
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
