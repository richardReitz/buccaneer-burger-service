import prismaClient from "../../prisma"

class DeleteOrderService {
    async execute(order_id: string) {
        const orderExists = await prismaClient.order.findFirst({
            where: { id: order_id }
        })

        if (!orderExists) {
            throw new Error('Order not exists')
        }

        const order = await prismaClient.order.delete({
            where: { id: order_id },
            select: { id: true }
        })

        return order
    }
}

export { DeleteOrderService }