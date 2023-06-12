import HttpMethod from "../../constants/HttpMethod";
import { request } from "../base/HTTP";

export const addApiKey = async (payload: any) => {
  return await request("/api-key", payload, HttpMethod.POST);
};

export const getAllApiKeysByUser = async (userId: string) => {
  return await request(`/api-key/user/${userId}`);
};