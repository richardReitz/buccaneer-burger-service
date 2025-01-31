import { NextFunction, Request, Response } from "express"
import { CreateProductService, type ProductRequest } from "../../services/product/CreateProductService"

class CreateProductController {
    async handle(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as ProductRequest

        if (!req.file) {
            throw new Error('error upload file')
        }
        
        try {
            const { filename: banner } = req.file
            
            const service = new CreateProductService()
            const createProduct = await service.execute({ ...reqBody, banner })

            return res.json(createProduct)
        } catch (err) {
            next(err)
        }
    }
}

export { CreateProductController }