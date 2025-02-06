import httpClient from "../client/httpClient";

export const getAllSpecialties = async (data: any) => {
  const response = await httpClient.get("/api/v1/specialties", data);

  return response?.data?.data;
};
