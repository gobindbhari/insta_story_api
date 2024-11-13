import {postModel} from "../models/postModel.js";
import { userModel } from "../models/userModel.js";

const postController = async (req, res) => {
    // console.log( req, 'reqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    const {title, content} = req.body
    console.log(title, content,'title and content ==============>>>>>>>>>>>')
    try {
        // const {userid , postid} = req.params
        const newPost = await postModel.create({
            title :title,
            content : content
        })
        console.log(newPost)
        res.status(200).json({ message: 'Post successfuly created' })
    } catch (error) {
        res.status(400).json({ message: 'Post not created' })
    }
}

const likePostController = async (req,res) => {
    try {
        const {userid,postid}=req.params
        console.log(userid,postid, 'useridddddddddddd postiddddddddddd========>>>>>>')

        const userExist = await userModel.findById(userid)
        const postExist = await postModel.findById(postid)
        console.log(userExist,postExist,' =============>>>>>>>>>>>>>>>>>>>>>')
        if(!userExist){
            console.log('user not found')
            return res.status(400).json({message : 'user not found'})
        }
        if(!postExist){
            console.log('Post not found')
            return res.status(400).json({message : 'Post not found'})
        }
        if(postExist.likedBy.includes(userid)){
            return res.status(400).json({message : 'Post is already liked'}) 
        }
        if(postExist.DislikedBy.includes(userid)){
            postExist.DislikedBy.pull(userid)
            console.log('--------------1111111111111')
            postExist.Dislike -= 1
        }
        postExist.likedBy.push(userid)
        postExist.like += 1

        await postExist.save();
        console.log('lasttttttttttttttt==============>>>>>>>>>')
        return res.status(200).json({message : 'post is liked'})
    } catch (error) {
        res.status(400).json({ message: 'Post not liked try again' })
    }
}

const disLikePostController = async (req,res) => {
    try {
        const {userid,postid}=req.params
        console.log(userid,postid, 'useridddddddddddd postiddddddddddd========>>>>>>')

        const userExist = await userModel.findById(userid)
        const postExist = await postModel.findById(postid)
        if(!userExist){
            res.status(400).json({message : 'user not found'})
        }
        if(!postExist){
            res.status(400).json({message : 'Post not found'})
        }
        if(postExist.DislikedBy.includes(userid)){
            res.status(400).json({message : 'Post is already Disliked'}) 
        }
        if(postExist.likedBy.includes(userid)){
            postExist.likedBy.pull(userid)
            postExist.like -= 1
        }
        postExist.DislikedBy.push(userid)
        postExist.Dislike += 1
        await postExist.save()
        return res.status(200).json({message : 'post is Disliked'})
    } catch (error) {
        res.status(400).json({ message: 'Post not Disliked' })
    }
}

const commentController = async (req,res) => {
    try {
        const{userid,postid} = req.params
        const {comment} = req.body

        const userExist = await userModel.findById(userid)
        const postExist = await postModel.findById(postid)
        if(!userExist){
            res.status(400).json({message : 'user not found'})
        }
        if(!postExist){
            res.status(400).json({message : 'Post not found'})
        }
        const commentContent = {
            userId : userid,
            text : comment
        }
        console.log(commentContent,'commentContent ======>>>>>>>')
        postExist.comment.push(commentContent)
        console.log(postExist.commentCount += 1)
        await postExist.save()
        return res.status(200).json({message: 'comment is created'})
    } catch (error) {
        console.log("error in commentController =====>>",error)
        return res.status(400).json({message: 'comment does not created try again'})
    }
}



export {postController, likePostController, disLikePostController, commentController}