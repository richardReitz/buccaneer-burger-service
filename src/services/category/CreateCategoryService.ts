import prismaClient from "../../prisma"

export interface CategoryRequest {
    name: string
}

class CreateCategoryService {
    async execute(req: CategoryRequest) {
        if (!req.name) {
            throw new Error('Category name is invalid')
        }

        const category = await prismaClient.category.create(
            { 
                data: { name: req.name },
                select: {
                    id: true,
                    name: true
                }
            }
        )

        return category
    }
}

export { CreateCategoryService }