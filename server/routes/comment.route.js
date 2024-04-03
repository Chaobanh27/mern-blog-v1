import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import {
  createComment, deleteComment, editComment, getPostComments, getcomments, likeComment
} from '../controllers/comment.controller.js'

const router = express.Router()

router.post('/create', verifyToken, createComment)
router.get('/getPostComments/:postId', getPostComments)
router.put('/editComment/:commentId', verifyToken, editComment)
router.put('/likeComment/:commentId', verifyToken, likeComment)
router.delete('/deleteComment/:commentId', verifyToken, deleteComment)
router.get('/getcomments', verifyToken, getcomments)


export default router