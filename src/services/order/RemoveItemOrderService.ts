import prismaClient from "../../prisma"

class RemoveItemOrderService {
    async execute(item_id: string) {
        const itemExists = await prismaClient.item.findFirst({
            where: { id: item_id }
        })

        if (!itemExists) {
            throw new Error('Item not exists')
        }

        const order = await prismaClient.item.delete({
            where: { id: item_id },
            select: { id: true }
        })

        return order
    }
}

export { RemoveItemOrderService }