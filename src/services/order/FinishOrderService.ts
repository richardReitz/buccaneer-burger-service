import prismaClient from "../../prisma"

class FinishOrderService {
    async execute(order_id: string) {
        const orderExists = await prismaClient.order.findFirst({
            where: { id: order_id }
        })

        if (!orderExists) {
            throw new Error('Order not exists')
        }

        const order = await prismaClient.order.update({
            where: { id: order_id },
            data: { status: true },
            select: {
                id: true,
                status: true
            }
        })

        return order
    }
}

export { FinishOrderService }