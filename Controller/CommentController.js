import prisma from "../DB/db.config.js";


//show user

export const showComment = async (req , res) => {
    const commentId = req.params.id;
    const post = await prisma.comment.findFirst({
        where: {
            id: Number(commentId)
        },
    });

    return res.json({ status: 200, data: comment });
}

//fetch user
export const fetchComments = async (req , res) => {
    const comments = await prisma.comment.findMany({});

    return res.json({status: 200, data: comment});
}


//Delete user

export const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    await prisma.comment.delete({
        where:{
            id:Number(commentId)
        }
    })
    return res.json({status: 200, msg:"Comment deleted successfully"});
}

//Create user
export const createComment = async (req, res) => {
    const { user_id, title, description } = req.body;
    

    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        },
    });
    return res.json({status:200, data:newPost, msg:"Post Created"});

}

// * Update User
export const updatePost = async (req, res) => {

    const postId = req.params.id
    const { user_id, title, description } = req.body;

    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    });
    return res.json({status:200 , message:"Post Updated Successfully"})


}