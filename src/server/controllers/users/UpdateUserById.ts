
import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface IUserParamsProps {
    id?: number,
}

interface IUserBodyProps{
    name?: string,
    lastname?: string,
    email?: string,
    password?: string,
    confirmpassword?: string,
}

export const updateUserByIdValidation = validation((getSchema) => ({
    params: getSchema<IUserParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IUserBodyProps>(yup.object().shape({
        name: yup.string().notRequired().min(3),
        lastname: yup.string().notRequired().min(3),
        email: yup.string().notRequired().email(),
        password: yup.string().notRequired(),
        confirmpassword: yup.string().oneOf([yup.ref('password'), null])
    })),
}))

export const updateUserById: RequestHandler = async (req: Request<IUserParamsProps, {}, IUserBodyProps>, res: Response) => {
    console.log(req.params)
    console.log(req.body)

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado')
}