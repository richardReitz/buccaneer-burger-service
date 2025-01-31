import { compare, hash } from "bcryptjs"
import prismaClient from "../../prisma"
import { sign } from "jsonwebtoken"

export interface AuthUserRequest {
    email: string
    password: string
}

class AuthUserService {
    async execute(req: AuthUserRequest) {
        const { email, password } = req

        const user = await prismaClient.user.findFirst({
            where: { email: email }
        })

        if (!user) {
            throw new Error('User/password incorrect')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('User/password incorrect')
        } 

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }