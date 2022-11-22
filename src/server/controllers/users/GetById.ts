
import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface IUserParamsProps {
    id?: number,
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IUserParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}))

export const getUserById: RequestHandler = async (req: Request<IUserParamsProps>, res: Response) => {
    console.log(req.params)

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}

