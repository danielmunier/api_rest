import { IUser } from "../interface";
import connection from "../database/connection";
import bcrypt from "bcrypt"
import userModel from "../models/userModel";

const create = async ({name, email, password}: IUser) => {
    const hashedPassword = await bcrypt.hash(password, 5);
    const userCreate = await userModel.create({
        name: name,
        email: email,
        hashedPassword: hashedPassword
    }, connection)

    

}


export default {
    create
}