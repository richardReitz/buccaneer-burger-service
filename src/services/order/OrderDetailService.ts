import prismaClient from "../../prisma"

class OrderDetailService {
    async execute(order_id: string) {
        const items = await prismaClient.item.findMany({
            where: { order_id },
            include: {
                order: true,
                product: true
            }
        })

        return items
    }
}

export { OrderDetailService }