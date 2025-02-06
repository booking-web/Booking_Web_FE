import httpClient from "../client/httpClient";

export const getAllDoctor = async (data: any) => {
  const response = await httpClient.get("/api/v1/doctors", data);

  return response?.data?.data;
};

export const getDetailDoctor = async (id: any) => {
  const response = await httpClient.get(`/api/v1/doctor/detail?doctorId=${id}`);

  return response.data;
};
