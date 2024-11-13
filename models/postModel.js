import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    content:{
        type:String,
        required : true
    },
    like:{
        type:Number,
        default : 0
    },
    Dislike:{
        type:Number,
        default : 0
    },
    commentCount:{
        type:Number,
        default : 0
    },
    comment:[{
        text : {type : String} ,
        userId:{type : mongoose.Schema.Types.ObjectId, ref: 'user'},
        date: {type:Date, default:Date.now()}
    }],
    likedBy:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    DislikedBy:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
})

export const postModel = mongoose.model('posts',postSchema)