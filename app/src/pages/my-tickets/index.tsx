import { useContext, useEffect, useState } from "react";
import TicketCard from "../../components/TicketCard";
import { getAllTicketByUser } from "../../services/tickets/ticketsService";
import AuthContext from "../../store/login/AuthContext";
import "./index.scss";

const MyTicketsPage = () => {
  const context = useContext(AuthContext);
  const [tickets, setTickets] = useState<any>([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const res = await getAllTicketByUser(context.user.id);
    setTickets(res.data);
  };

  return (
    <div className="my-tickets-container">
      {tickets.map((t: any) => {
        return (
          <TicketCard
            arrivalCity={t.flight.route.arrivalCity}
            departureCity={t.flight.route.departureCity}
            arrival={t.flight.route.arrival}
            departure={t.flight.route.departure}
            ticketPrice={t.payedPrice}
            dataSeats={1}
            flightId={""}
            availableSeats={t.availableSeats}
            canPurchase={false}
          />
        );
      })}
    </div>
  );
};

export default MyTicketsPage;
