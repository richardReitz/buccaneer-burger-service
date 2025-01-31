import { NextFunction, Response } from "express"
import { ListCategoriesService } from "../../services/category/ListCategoriesService"

class ListCategoriesController {
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const service = new ListCategoriesService()
            const categoryList = await service.execute()
    
            return res.json(categoryList)
        } catch (err) {
            next(err)
        }
    }
}

export { ListCategoriesController }