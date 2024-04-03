import express from 'express'
import { deleteUser, getUser, getUsers, signout, updateUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/signout', signout)
router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.get('/getusers', verifyToken, getUsers)
router.get('/:userId', getUser)

export default router