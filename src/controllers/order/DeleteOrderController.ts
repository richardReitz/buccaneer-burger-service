import { NextFunction, Request, Response } from "express"
import { DeleteOrderService } from "../../services/order/DeleteOrderService"

class DeleteOrderController {
    async handle(req: Request, res: Response, next: NextFunction){
        const { order_id } = req.body

        if (!order_id) {
            throw new Error('Order id invalid')
        }
        
        try {
            const service = new DeleteOrderService()
            const deleteOrder = await service.execute(order_id)

            return res.json(deleteOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { DeleteOrderController }