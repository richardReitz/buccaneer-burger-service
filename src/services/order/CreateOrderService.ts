import prismaClient from "../../prisma"

export interface OrderRequest {
    table: number
    name?: string
}

class CreateOrderService {
    async execute(req: OrderRequest) {
        const { table, name} = req

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            },
            select: {
                id: true,
                table: true,
                status: true,
                draft: true,
                name: true
            }
        })

        return order
    }
}

export { CreateOrderService }