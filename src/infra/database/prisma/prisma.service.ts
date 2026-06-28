import 'dotenv/config'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL

    if (!databaseUrl) {
      throw new Error('DATABASE_URL nao definida.')
    }

    const isRemote = databaseUrl.includes('render.com') || process.env.NODE_ENV === "production"

    const poolConfig = isRemote
      ? { connectionString: databaseUrl, ssl: { rejectUnauthorized: false } }
      : { connectionString: databaseUrl }

    const adapter = new PrismaPg(poolConfig)

    super({
      adapter,
    })
  }

  async onModuleInit() {
    await this.$connect()
  }
}