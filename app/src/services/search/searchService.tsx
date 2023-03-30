import { makeParametersList, request } from "./../base/HTTP";

export async function searchFlights(parameters: any) {

    return await request("/flight/search" + makeParametersList(parameters));
}

