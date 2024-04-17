import './Card.css'
import getDataInfo from '../utilities/GetDataInfo'
import { TicketData } from '../App'

interface CardProps {
  ticket: TicketData
}

export default function Card({ ticket }: CardProps) {
  function getStopsString(stops: number) {
    switch (stops) {
      case 0:
        return 'прямой'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      default:
        return '3 пересадки'
    }
  }

  return (
    <div className="card">
      <div className="buy-part">
        <div className="buy-part-airline">
          <img
            src={`${ticket.carrier}.png`}
            alt={`${ticket.carrier} logo`}
            width={150}
          />
        </div>
        <button className="buy-part-btn">
          Купить <br /> за {ticket.price}
        </button>
      </div>
      <hr className="card-hr" />
      <div className="flight-info">
        <div className="flight-info-depart">
          <div className="flight-info-depart-time">{ticket.departure_time}</div>
          <div>
            <strong>
              {ticket.origin}, {ticket.origin_name}
            </strong>
          </div>
          <div>{getDataInfo(ticket.departure_date)}</div>
        </div>
        <div className="flight-info-stops">
          <div>{getStopsString(ticket.stops)}</div>
          <div className="flight-info-stops-iconbar">
            <hr className="flight-info-stops-iconbar-line" />
            <img
              src="airplane-icon.png"
              alt="airplane icon"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flight-info-dest">
          <div className="flight-info-depart-time">{ticket.arrival_time}</div>
          <div>
            <strong>
              {ticket.destination}, {ticket.destination_name}
            </strong>
          </div>
          <div>{getDataInfo(ticket.arrival_date)}</div>
        </div>
      </div>
    </div>
  )
}
