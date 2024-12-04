import prisma from "../DB/db.config.js";


//show comment

export const showComment = async (req , res) => {
    const commentId = req.params.id;
    const comment = await prisma.comment.findFirst({
        where: {
            id: Number(commentId)
        },
    });

    return res.json({ status: 200, data: comment });
}

//fetch comments
export const fetchComments = async (req , res) => {
    const comments = await prisma.comment.findMany({
        include:{
            post:{
                include:{
                    user:{
                        select:{
                            name:true,
                        }
                    }
                }
            },
            
        },

        orderBy:{
            created_at: "desc",
        }
        
    });

    return res.json({status: 200, data: comments});
}


//Delete comment

export const deleteComment = async (req, res) => {
    const commentId = req.params.id;

    await prisma.post.update({
        where:{
            id: Number(post_id)
        },
        data: {
            comment_count:{
                decrement:1
            }
        }
    })

    await prisma.comment.delete({
        where:{
            id:Number(commentId)
        }
    })
    return res.json({status: 200, msg:"Comment deleted successfully"});
}

//Create comment
export const createComment = async (req, res) => {
    const { user_id, post_id, comment } = req.body;

    // increase comment counter

    await prisma.post.update({
        where:{
            id: Number(post_id)
        },
        data: {
            comment_count:{
                increment:1
            }
        }
    })
    

    const newComment = await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            post_id:Number(post_id),
            comment
        },
    });
    return res.json({status:200, data:newComment, msg:"Comment Posted"});

}

// * Update Comment
export const updateComment = async (req, res) => {

    const commentId = req.params.id
    const { user_id, post_id, comment } = req.body;

    await prisma.post.update({
        where:{
            id:Number(commentId)
        },
        data:{
            user_id:Number(user_id),
            post_id:Number(post_id),
            comment
        }
    });
    return res.json({status:200 , message:"Comment Updated Successfully"})


}