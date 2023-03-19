import { request } from "./../base/HTTP";
import HttpMethod from "../../constants/HttpMethod";
import LoginDto from "../../model/auth/loginDto";

export async function login(loginDto: LoginDto) {
  return await request("/auth/authenticate", loginDto as any, HttpMethod.POST);
}

export async function registerUser(newUser: any) {
  return await request("/auth/register", newUser as any, HttpMethod.POST);
}
