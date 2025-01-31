import { NextFunction, Request, Response } from "express"
import { CreateOrderService, type OrderRequest } from "../../services/order/CreateOrderService"

class CreateOrderController {
    async handle(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as OrderRequest

        if (!reqBody.table) {
            throw new Error('Table number is empty')
        }

        
        try {
            const service = new CreateOrderService()
            const createOrder = await service.execute(reqBody)

            return res.json(createOrder)
        } catch (err) {
            next(err)
        }
    }
}

export { CreateOrderController }