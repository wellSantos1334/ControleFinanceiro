import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface IUser {
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmpassword?: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IUser>(yup.object().shape({
        name: yup.string().required().min(3),
        lastname: yup.string().required().min(3),
        email: yup.string().required().email(),
        password: yup.string().required(),
        confirmpassword: yup.string().oneOf([yup.ref('password'), null])
    })),
}))

export const createUserSave = async (req: Request< {}, {}, IUser >, res: Response) => {
    // console.log(req.body)

    return res.send('Create!')
}

// controller to render front end page
/*export const createUser = (req: Request, res: Response) => {}*/