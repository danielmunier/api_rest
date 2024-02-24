import { PrismaClient } from "@prisma/client";
import { IUser, IUserModel } from "../interface";


const create = async ({name, email, hashedPassword}: IUserModel, connection: PrismaClient) => {
    await connection.user.create({
        data: {
            name: name, 
            email: email,
            hashedPassword: hashedPassword
        }
    })
}

export default {
    create
}