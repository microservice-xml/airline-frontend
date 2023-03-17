import { makeParametersList, request } from "./../base/HTTP";

export async function searchFlights(parameters: any) {
    return await request("/flight/search" + "?arrival=2023-03-10T13:30:00&arrivalCity=" + parameters.From + "&departureCity=" + parameters.To + "&desiredSeats=" + parameters.desiredSeats);
}

