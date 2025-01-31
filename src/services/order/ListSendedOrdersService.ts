import prismaClient from "../../prisma";


class ListSendedOrdersService {
    async execute() {
        const orders = prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders
    }
}

export { ListSendedOrdersService }