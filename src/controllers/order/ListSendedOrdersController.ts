import { NextFunction, Response } from "express";
import { ListSendedOrdersService } from "../../services/order/ListSendedOrdersService";

class ListSendedOrdersController {
    async handle(_, res: Response, next: NextFunction) {
        try {
            const service = new ListSendedOrdersService()
            const orderList = await service.execute()

            return res.json(orderList)
        } catch (err) {
            next(err)
        }
    }
}

export { ListSendedOrdersController }