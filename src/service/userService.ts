import { IUser } from "../interface";
import connection from "../database/connection";
import bcrypt from "bcrypt"
import userModel from "../models/userModel";

const create = async ({name, email, password}: IUser) => {
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await userModel.create({
        name: name,
        email: email,
        password: hashedPassword
    }, connection)
    return user 
}

const getByEmail = async (email: string) => {
    let user = await userModel.getByEmail(email, connection) 
    return user
}



export default {
    create,
    getByEmail
}