import { NextFunction, Request, Response } from "express";
import { ListProductsByCategoryService } from "../../services/product/ListProductsByCategoryService";


class ListProductsByCategoryController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const category_id = req.query.category_id as string

        if (!category_id) {
            throw new Error('Category not find')
        }

        try {
            const service = new ListProductsByCategoryService()
            const products = await service.execute(category_id)
    
            return res.json(products)
        } catch (err) {
            next(err)
        }
    }
}

export { ListProductsByCategoryController }