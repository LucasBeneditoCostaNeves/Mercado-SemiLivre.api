import { Injectable } from "@nestjs/common"
import { IProductUpdateDTO, ProductRepository } from "../../repositories/ProductRepository"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { ProductForbiddenError } from "src/domain/errors/product/ProductForbiddenError"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"

interface IProductUpdateRequest {
    dataProduct: IProductUpdateDTO
    sellerId: string
}

@Injectable()
export class UpdateProductUseCase {
    constructor(private ProductRepository: ProductRepository) { }

    async execute({ dataProduct, sellerId }: IProductUpdateRequest) {
        const { id, title, status, thumbnail } = dataProduct

        const product = await this.ProductRepository.findById(id)

        if (!product) {
            throw new ProductNotFoundError()
        }

        if (product.seller_user_id !== sellerId) {
            throw new ProductForbiddenError()
        }

        const dataToUpdate: Partial<{ title: string; status: boolean; thumbnail: string }> = {}

        if (title !== undefined) dataToUpdate.title = title.trim()
        if (status !== undefined) dataToUpdate.status = status
        if (thumbnail !== undefined) dataToUpdate.thumbnail = thumbnail

        if (Object.keys(dataToUpdate).length === 0) {
            throw new NoFieldsToUpdateError()
        }

        await this.ProductRepository.update({ id, ...dataToUpdate })
    }
}
