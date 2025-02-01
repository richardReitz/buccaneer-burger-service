import { NextFunction, Request, Response } from "express"
import { FinishOrderService } from "../../services/order/FinishOrderService"

class FinishOrderController {
    async handle(req: Request, res: Response, next: NextFunction){
        const { order_id } = req.body

        if (!order_id) {
            throw new Error('Order id invalid')
        }
        
        try {
            const service = new FinishOrderService()
            const finishOrder = await service.execute(order_id)

            return res.json(finishOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { FinishOrderController }