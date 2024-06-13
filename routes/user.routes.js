
const Router = require('express')
const router = new Router()
const { createUser, getUsers, getOneUser, deleteUser, updateUser } = require('../controller/user.controller')

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/:id', getOneUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)



module.exports = router