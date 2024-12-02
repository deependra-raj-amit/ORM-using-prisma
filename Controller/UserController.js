import prisma from "../DB/db.config.js";


//show user

export const showUser = async (req , res) => {
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        },
    });

    return res.json({ status: 200, data: user });
}

//fetch user
export const fetchUsers = async (req , res) => {
    const user = await prisma.user.findMany({});

    return res.json({status: 200, data: user});
}


//Delete user

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return res.json({status: 200, msg:"User deleted successfully"});
}

//Create user
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