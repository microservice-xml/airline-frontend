import FlightRoute from "./FlightRoute";
import Section from "./Section"

export default interface Flight {
    id: string;
    description: string;
    numberOfSeats: number;
    availableSeats: number;
    ticketPrice: number;
    flightRoute: FlightRoute;
}