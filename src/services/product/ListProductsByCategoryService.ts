import prismaClient from "../../prisma"

class ListProductsByCategoryService {
    async execute(category_id: string) {
        const productsList = await prismaClient.product.findMany({
            where: { category_id: category_id },
            select: {
                id: true,
                name: true,
                price: true,
                banner: true,
                description: true
            }
        }) 

        return productsList
    }
}

export { ListProductsByCategoryService }