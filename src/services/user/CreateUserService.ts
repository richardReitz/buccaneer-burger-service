import { hash } from "bcryptjs"
import prismaClient from "../../prisma"


export interface UserRequest {
    name: string
    email: string
    password: string
}

class CreateUserService {
    async execute(req: UserRequest) {
        const { email, password } = req

        if (!email) {
            throw new Error('Email is invalid')
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: { email: email }
        })

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const hashedPassword = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                ...req,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { CreateUserService }