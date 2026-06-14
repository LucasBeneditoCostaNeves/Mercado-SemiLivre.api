import { createZodDto } from "nestjs-zod";
import { createProductVariationBodyShema } from "../schemas/productVariation.schema";

export class createProductVariationBodyDto extends createZodDto(createProductVariationBodyShema) { }