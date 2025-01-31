import prismaClient from "../../prisma";

class SendOrderService {
    async execute(order_id: string) {
        const orderExists = await prismaClient.order.findUnique({
            where: { id: order_id },
        })
        console.log('order_id: ', order_id);
    
        if (!orderExists) {
            throw new Error("Order not found")
        }
      
        const order = await prismaClient.order.update({
            where: { id: order_id },
            data: { draft: false }
        })
    
        return order
    }
}

export { SendOrderService }