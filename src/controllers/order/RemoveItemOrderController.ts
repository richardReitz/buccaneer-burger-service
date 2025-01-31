import { NextFunction, Request, Response } from "express"
import { RemoveItemOrderService } from "../../services/order/RemoveItemOrderService"

class RemoveItemOrderController {
    async handle(req: Request, res: Response, next: NextFunction){
        const item_id = req.query.item_id as string

        if (!item_id) {
            throw new Error('Item id invalid')
        }
        
        try {
            const service = new RemoveItemOrderService()
            const removeItem = await service.execute(item_id)

            return res.json(removeItem)
        } catch (err) {
            next(err)
        }
    }
}

export { RemoveItemOrderController }