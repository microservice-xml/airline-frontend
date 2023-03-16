import { makeParametersList, request } from "./../base/HTTP";
import HttpMethod from "../../constants/HttpMethod";
import LoginDto from "../../model/auth/loginDto";

export async function login(loginDto : LoginDto) {
    return await request('/api/auth/authenticate', loginDto as any, HttpMethod.POST);
}