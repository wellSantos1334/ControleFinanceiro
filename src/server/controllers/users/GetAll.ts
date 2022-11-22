
import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface IUserQueryProps{
    page?: number,
    limit?: number,
    filter?: string
}

export const getAllValidation = validation ((getSchema) => ({
    query: getSchema<IUserQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    })),
}))

export const getAll: RequestHandler = async (req: Request<{}, {}, {}, IUserQueryProps>, res: Response) => {
    console.log(req.query)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado ainda')
}

