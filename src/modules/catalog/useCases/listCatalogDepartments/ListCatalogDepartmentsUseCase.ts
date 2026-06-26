import { Injectable } from '@nestjs/common'
import { CATEGORY_ICON_MAP } from '../../constants/category-icon-map'
import { CatalogRepository } from '../../repositories/CatalogRepository'

export type Department = {
  id: string
  label: string
  icon: string
}

@Injectable()
export class ListCatalogDepartmentsUseCase {
  constructor(private catalogRepository: CatalogRepository) {}

  async execute(): Promise<{ items: Department[] }> {
    const categories = await this.catalogRepository.findDepartments()

    const items: Department[] = categories.map((c) => ({
      id: c.id,
      label: c.name,
      icon: CATEGORY_ICON_MAP[c.name] ?? 'ti-package',
    }))

    return { items }
  }
}
