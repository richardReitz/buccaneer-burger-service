import { NextFunction, Response } from "express";
import { ListFinishedOrdersService } from "../../services/order/ListFinishedOrdersService";

class ListFinishedOrdersController {
    async handle(_, res: Response, next: NextFunction) {
        try {
            const service = new ListFinishedOrdersService()
            const orderList = await service.execute()

            return res.json(orderList)
        } catch (err) {
            next(err)
        }
    }
}

export { ListFinishedOrdersController }