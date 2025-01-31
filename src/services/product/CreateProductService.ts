import prismaClient from "../../prisma"

export interface ProductRequest {
    name: string
    price: string
    description: string
    category_id: string
    banner: string
}

class CreateProductService {
    async execute(req: ProductRequest) {
        const { name, price, description, category_id, banner } = req

        if (!req.name) {
            throw new Error('Product name is invalid')
        }

        const product = await prismaClient.product.create(
            { 
                data: { 
                    name: name,
                    price: price,
                    description: description,
                    category_id: category_id,
                    banner: banner
                }
            }
        )

        return product
    }
}

export { CreateProductService }