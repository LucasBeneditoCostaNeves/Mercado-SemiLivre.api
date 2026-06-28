import { Injectable } from "@nestjs/common"
import { IProductUpdateDTO, ProductRepository } from "../../repositories/ProductRepository"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"

interface IProductUpdateRequest {
    dataProduct: IProductUpdateDTO
}

@Injectable()
export class UpdateProductUseCase {
    constructor(private ProductRepository: ProductRepository) { }

    async execute({ dataProduct }: IProductUpdateRequest) {
        const { id, title, status } = dataProduct

        const product = await this.ProductRepository.findById(id)

        if (!product) {
            throw new ProductNotFoundError()
        }

        const dataToUpdate: Partial<{ title: string; status: boolean }> = {}

        if (title !== undefined) dataToUpdate.title = title.trim()
        if (status !== undefined) dataToUpdate.status = status

        if (Object.keys(dataToUpdate).length === 0) {
            throw new NoFieldsToUpdateError()
        }

        await this.ProductRepository.update({ id, ...dataToUpdate })
    }
}
