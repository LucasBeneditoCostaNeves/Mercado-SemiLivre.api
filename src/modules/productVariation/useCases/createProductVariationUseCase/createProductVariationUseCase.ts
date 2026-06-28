import { Injectable } from "@nestjs/common"
import { ProductVariationRepository } from "../../repositories/ProductVariationRepository"
import { ProductVariation } from "../../entities/ProductVariation"

interface CreatedProductVariationRequest {
    title: string
    price: number
    quantity: number
    description: string
    product_id: string
    status: boolean,
}

@Injectable()
export class createProductVariationUseCase {
    constructor(private productVariationRepository: ProductVariationRepository) { }

    async execute({ title, price, quantity, description, product_id, status }: CreatedProductVariationRequest) {

        const productVariation = new ProductVariation({
            title,
            price,
            quantity,
            status,
            description,
            product_id,
        })

        await this.productVariationRepository.create(productVariation)

        return productVariation
    }
}
