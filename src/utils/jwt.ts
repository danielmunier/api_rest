import { IUser, IUserModel } from "../interface";
require("dotenv").config();
const jwt = require("jsonwebtoken");

async function generateAccessToken(user: IUserModel) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "5m",
  });
}

async function generateRefreshToken(user: IUserModel, jti: string) {
  return jwt.sign(
    {
      userId: user.id,
      jti,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "8h",
    }
  );
}

export default async function generateTokens(user: any, jti: string) {
  const accessToken = await generateAccessToken(user);
  const refreshToken = await generateRefreshToken(user, jti);
 
  return {
    accessToken,
    refreshToken,
  };
}


