import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

const SOURCE_PAGES = ['home', 'search', 'category', 'product'] as const
type SourcePage = (typeof SOURCE_PAGES)[number]

const DEDUP_WINDOW_MS = 60 * 1000

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async recordSearch(userId: string, term: string): Promise<{ created: boolean }> {
    const since = new Date(Date.now() - DEDUP_WINDOW_MS)
    const existing = await this.prisma.userSearchHistory.findFirst({
      where: { userId, term, searchedAt: { gte: since } },
      select: { id: true },
    })

    if (existing) {
      return { created: false }
    }

    await this.prisma.userSearchHistory.create({
      data: { userId, term },
    })

    return { created: true }
  }

  async recordProductClick(userId: string, productId: string, sourcePage: SourcePage) {
    await this.prisma.userProductClick.create({
      data: { userId, productId, sourcePage },
    })
  }

  async getSearchHistory(userId: string) {
    const rows = await this.prisma.userSearchHistory.findMany({
      where: { userId },
      orderBy: { searchedAt: 'desc' },
      take: 50,
    })

    const seen = new Set<string>()
    const distinct: { term: string; searchedAt: Date }[] = []

    for (const row of rows) {
      if (!seen.has(row.term)) {
        seen.add(row.term)
        distinct.push({ term: row.term, searchedAt: row.searchedAt })
      }
      if (distinct.length === 10) break
    }

    return distinct.map((r) => ({
      term: r.term,
      searchedAt: r.searchedAt.toISOString(),
    }))
  }
}
