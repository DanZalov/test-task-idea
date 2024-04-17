import './Card.css'
import { TicketData } from '../../App'
import CardBuyPart from './CardBuyPart'
import FlightInfoGeoTime from './FlightInfoGeoTime'
import FlightInfoStops from './FlightInfoStops'

interface CardProps {
  ticket: TicketData
}

export default function Card({ ticket }: CardProps) {
  return (
    <div className="card">
      <CardBuyPart ticketPrice={ticket.price} carrier={ticket.carrier} />
      <hr className="card-hr" />
      <div className="flight-info">
        <FlightInfoGeoTime
          time={ticket.departure_time}
          date={ticket.departure_date}
          airport={ticket.origin}
          city={ticket.origin_name}
          depart={true}
        />
        <FlightInfoStops stops={ticket.stops} />
        <FlightInfoGeoTime
          time={ticket.arrival_time}
          date={ticket.arrival_date}
          airport={ticket.destination}
          city={ticket.destination_name}
          depart={false}
        />
      </div>
    </div>
  )
}
