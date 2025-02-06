import httpClient from "../client/httpClient";
import { ILogin, IRegister, IChangePassword, IUpdateUser } from "../models/user";

export const getUserProfile = async (id: any) => {
  const response = await httpClient.get(`/api/v1/get-user?userId=${id}`)

  return response.data.data
}

export const login = async (data: ILogin) => {
  const response = await httpClient.post("/api/v1/login", data)

  return response.data.data
}

export const register = async (data: IRegister) => {
  const response = await httpClient.post("/api/v1/register", data)

  return response.data
}

export const forgotPassword = async (email: any) => {
  const response = await httpClient.post(`/api/v1/forgot-password?email=${email}`);

  return response.data
}

export const changePassword = async (data: IChangePassword) => {
  const response = await httpClient.post("/api/v1/change-password", data)

  return response.data
}

export const updateUser = async (data: IUpdateUser) => {
  const response = await httpClient.post("/api/v1/update-user", data)

  return response.data
}

export const deleteAccount = async (id: any) => {
  const response = await httpClient.delete(`/api/v1/delete-account?userId=${id}`)

  return response.data
}