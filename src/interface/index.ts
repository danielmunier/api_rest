export interface IUser {
    name: string;
    email: string
    password: string
}

export interface IUserModel {
    id: string
    name: string;
    email: string
    password: string,
    createdAt: Date,
    updateAt: Date
}

export interface RefreshTokenWhiteList {
    jti: string;
    refreshToken: string;
    userId: string;
  }



