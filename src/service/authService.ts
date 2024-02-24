import connection from "../database/connection";
import { IUser, RefreshTokenWhiteList } from "../interface";
import hashToken from "../utils/hashToken"



const addRefreshTokenToWhitelist = async ({ jti, refreshToken, userId }: RefreshTokenWhiteList) => {
    return connection.refreshToken.create({
      data: {
        id: jti,
        hashedToken: await hashToken(refreshToken),
        userId
      },
    });
  }

const findRefreshTokenById = (id: string) => {
    return connection.refreshToken.findUnique({
      where: {
        id,
      },
    });
  }

const deleteRefreshToken = (id: string) => {
    return connection.refreshToken.update({
      where: {
        id,
      },
      data: {
        revoked: true
      }
    });
  }
const revokeTokens = (userId: string) => {
    return connection.refreshToken.updateMany({
      where: {
        userId
      },
      data: {
        revoked: true
      }
    });
  }

 module.exports =  {
    addRefreshTokenToWhitelist,
    findRefreshTokenById,
    deleteRefreshToken,
    revokeTokens
  };