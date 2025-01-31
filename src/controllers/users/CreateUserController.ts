import { NextFunction, Request, Response } from "express";
import { CreateUserService, type UserRequest } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const userReq = req.body as UserRequest
        
        try {
            const service = new CreateUserService()
            const user = await service.execute(userReq)

            return res.json(user)
        } catch (err) {
            next(err)
        }
    }
}

export { CreateUserController }