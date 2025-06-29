import { write } from 'fs'
import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const usuario = await prisma.usuario.create({
    data: {
        email: 'elisa@test.com',
        nome: 'Elisa RF Santos',
        papel: 'Assistente',
        senha: '1234'
    },
  })
  console.log(usuario)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })