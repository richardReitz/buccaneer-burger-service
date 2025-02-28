import { NextFunction, Request, Response } from "express"
import { OrderDetailService } from "../../services/order/OrderDetailService"

class OrderDetailController {
    async handle(req: Request, res: Response, next: NextFunction){
        const order_id = req.query.order_id as string

        if (!order_id) {
            throw new Error('Order not found')
        }
        
        try {
            const service = new OrderDetailService()
            const addItemToOrder = await service.execute(order_id)

            return res.json(addItemToOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { OrderDetailController }