import { NextFunction, Request, Response } from "express";
import userService from "../service/userService"


const create = async (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body

    const userCreating = await userService.create({name, email, password})

}

export default {
    create
}