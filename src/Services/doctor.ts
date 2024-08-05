import httpClient from "../client/httpClient"
import { IGetAllDoctor } from "../models/doctor"

export const getAllDoctor = async (data: any) => {
  const response = await httpClient.get("/api/v1/doctor/list", data)

  return response.data.data
}

export const getDetailDoctor = async (id: any) => {
  const response = await httpClient.get(`/api/v1/doctor/detail?doctorId=${id}`)

  return response.data
}