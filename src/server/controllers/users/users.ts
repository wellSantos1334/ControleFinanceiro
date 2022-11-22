import * as createUserSave from './Create'
import * as getAll from './GetAll'
import * as getById from './GetById'
// import * as createUser from './Create'

export const UserController = {
    ...createUserSave,
    ...getAll,
    ...getById,
    // ...createUser,
}
