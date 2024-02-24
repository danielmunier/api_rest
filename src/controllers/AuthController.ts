import { NextFunction, Request, Response } from "express";
import userService from "../service/userService";
import generateTokens from "../utils/jwt";
const authService =  require("../service/authService")
import {v4 as uuidv4} from "uuid";

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(400).json({ message: "Missing name, email or name." });
    return;
  }

  const existingUser = await userService.getByEmail(email);
  if (existingUser != null || existingUser != undefined) {
    res.status(409).json({ message: "Email already in use." });
    return;
  }



  const user = await userService.create({
    name: name,
    email: email,
    password: password,
  })
  console.log(typeof(user))
   if(user == null || user == undefined ) {
        res.status(404).json({message: "Something went wrong creating an user"})
        return
   }

  const jti = uuidv4();
  console.log(jti)
  const { accessToken, refreshToken } = await generateTokens(user, jti);
  console.log(refreshToken)
  await authService.addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

  res.json({
    accessToken,
    refreshToken
  })
};

export default {
  register,
};
