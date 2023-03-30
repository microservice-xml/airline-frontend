import { request } from "./../base/HTTP";

export async function getAll() {
  return await request("/city");
}
