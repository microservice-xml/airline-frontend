import HttpMethod from "../../constants/HttpMethod";
import { request } from "../base/HTTP";

export async function createFlight(flight: any) {
  return await request("/flight", flight, HttpMethod.POST);
}
