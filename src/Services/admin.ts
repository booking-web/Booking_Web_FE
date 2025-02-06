import httpClient from "../client/httpClient";

export const createDoctorAccount = async (data: any) => {
  const response = await httpClient.post("/api/v1/doctors", data);

  return response?.data?.data;
};
