export default interface SearchItem {
    id: string;
    departureCity: string;
    arrivalCity: string;
    departure: Date;
    arrival: Date;
    ticketPrice: number;
    desiredSeats: number;
}
