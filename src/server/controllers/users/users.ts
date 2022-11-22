import * as createUserSave from './Create'
import * as getAll from './getAll'
// import * as createUser from './Create'

export const UserController = {
    ...createUserSave,
    ...getAll,
    // ...createUser,
}
