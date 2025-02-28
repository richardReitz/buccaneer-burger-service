import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import cors from 'cors'

const app = express()
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(router)

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(3333, () => console.log('Server running on port 3333'))