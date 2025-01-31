import { NextFunction, Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { order_id } = req.body

        if (!order_id) {
            throw new Error('Order id invalid')
        }
        
        try {
            const service = new SendOrderService()
            const updateOrder = await service.execute(order_id)

            return res.json(updateOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { SendOrderController }