import City from "..//City"

export default interface SearchItem {
    id: string;
    departureCity: City;
    arrivalCity: City;
    departure: Date;
    arrival: Date;
    ticketPrice: number;
    desiredSeats: number;
}
