import express from 'express'
import { commentController, disLikePostController, 
    likePostController, postController } from '../controllers/postController.js'

const postRouter = express.Router()

postRouter.post('/create', postController)
postRouter.post('/likes/:userid/:postid', likePostController)
postRouter.post('/dislikes/:userid/:postid', disLikePostController)
postRouter.post('/:postid/comments/:userid', commentController)

export { postRouter }