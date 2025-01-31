import { NextFunction, Request, Response } from "express"
import { type CategoryRequest, CreateCategoryService } from "../../services/category/CreateCategoryService"

class CreateCategoryController {
    async handle(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as CategoryRequest
        try {
            const service = new CreateCategoryService()
            const category = await service.execute(reqBody)

            return res.json(category)
        } catch (err) {
            next(err)
        }
    }
}

export { CreateCategoryController }