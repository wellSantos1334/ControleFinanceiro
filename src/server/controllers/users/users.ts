import * as createUserSave from './Create'
import * as deleteUserById from './DeleteUserById'
import * as getAll from './GetUserAll'
import * as getById from './GetUserById'
import * as updateUserById from './UpdateUserById'
// import * as createUser from './Create'

export const UserController = {
    ...createUserSave,
    ...getAll,
    ...getById,
    ...deleteUserById,
    ...updateUserById
    // ...createUser,
}
