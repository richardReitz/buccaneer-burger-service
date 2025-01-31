import prismaClient from "../../prisma"

export interface ItemRequest {
    order_id: string
    product_id: string
    amount: number
}

class AddItemToOrderService {
    async execute(req: ItemRequest) {
        const { amount, order_id, product_id } = req

        const item = await prismaClient.item.create({
            data: {
                order_id,
                product_id,
                amount
            },
            select: {
                id: true,
                amount: true,
                order_id: true,
                product_id: true,
                product: { 
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        banner: true
                    }
                }
            }
        })

        return item
    }
}

export { AddItemToOrderService }