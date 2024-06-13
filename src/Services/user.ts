import httpClient from "../client/httpClient";
import { ILogin, IUser, IRegister } from "../models/user";

export const getUserProfile = async () => {
  const response = await httpClient.get("")

  return response.data
}

export const login = async (data: ILogin) => {
  const response = await httpClient.post("", data)

  return response.data
}

export const register = async (data: IRegister) => {
  const response = await httpClient.post("", data)

  return response.data
}
