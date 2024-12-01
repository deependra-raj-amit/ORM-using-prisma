import prisma from "../DB/db.config.js";
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if(findUser){
        return res.json({status:400, message:"Email Already Taken, Please Try Another Email"})
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    });
    return res.json({status:200, data:newUser, msg:"User Created"});

}

// * Update User
export const updateUser = async (req, res) => {

    const userId = req.params.id
    const { name, email, password } = req.body;

    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    });
    return res.json({status:200 , message:"User Updated Successfully"})


}