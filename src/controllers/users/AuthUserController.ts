import { NextFunction, Request, Response } from "express";
import { type AuthUserRequest, AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const userReq = req.body as AuthUserRequest
        
        try {
            const service = new AuthUserService()
            const user = await service.execute(userReq)

            return res.json(user)
        } catch (err) {
            next(err)
        }
    }
}

export { AuthUserController }