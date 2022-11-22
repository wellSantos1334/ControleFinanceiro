import { Router } from 'express'
import { UserController } from '../controllers/controllers'

const router = Router()

// router.get('/createUser', UserController.createUser) -> Router to render front end page
router.post('/createUserSave', UserController.createValidation, UserController.createUserSave)
router.get('/getUsers', UserController.getAllValidation, UserController.getAll)
router.get('/getUserById/:id', UserController.getByIdValidation, UserController.getUserById)
router.delete('/deleteUserById/:id', UserController.deleteUserByIdValidation, UserController.deleteUserById)


export { router }