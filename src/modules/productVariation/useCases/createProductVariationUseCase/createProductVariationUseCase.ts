import { Injectable } from "@nestjs/common"
import { ProductVariationRepository } from "../../repositories/ProductVariationRepository"
import { ProductVariation } from "../../entities/ProductVariation"


interface CreatedProductVariationRequest {
    name: string
    price: number
    quantity: number
    description: string
    product_id: string
    status: boolean,
}


@Injectable()
export class createProductVariationUseCase {
    constructor(private productVariationRepository: ProductVariationRepository) { }

    async execute({ name, price, quantity, description, product_id, status }: CreatedProductVariationRequest) {

        const user = new ProductVariation({
            name,
            price,
            quantity,
            status,
            description,
            product_id,
        })

        await this.productVariationRepository.create(user)

        return user
    }
}