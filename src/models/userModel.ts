import { PrismaClient } from "@prisma/client";
import { IUser, IUserModel } from "../interface";


const create = async ({name, email, password}: IUser, connection: PrismaClient) => {
   const user = await connection.user.create({
        data: {
            name: name, 
            email: email,
            password: password
        }
    })

    return user
}


const getByEmail = async (email: string, connection: PrismaClient) => {
    
    const user = await connection.user.findUnique({
        where: {
            email: email
        }

    })

    return user

}




export default {
    create,
    getByEmail
}