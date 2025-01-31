import { NextFunction, Request, Response } from "express"
import { AddItemToOrderService, ItemRequest } from "../../services/order/AddItemToOrderService"

class AddItemToOrderController {
    async handle(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as ItemRequest

        if (!reqBody.order_id || !reqBody.product_id) {
            throw new Error('Error fields')
        }
        
        try {
            const service = new AddItemToOrderService()
            const addItemToOrder = await service.execute(reqBody)

            return res.json(addItemToOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { AddItemToOrderController }