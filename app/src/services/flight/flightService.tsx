import HttpMethod from "../../constants/HttpMethod";
import { request } from "../base/HTTP";

export async function createFlight(flight: any) {
  return await request("/flight", flight, HttpMethod.POST);
}

export async function deleteFlight(flightId: any) {
  return await request("/flight/" + flightId, [], HttpMethod.DELETE);
}
