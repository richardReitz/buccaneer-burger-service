import prismaClient from "../../prisma";


class ListFinishedOrdersService {
    async execute() {
        const orders = prismaClient.order.findMany({
            where: {
                status: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders
    }
}

export { ListFinishedOrdersService }