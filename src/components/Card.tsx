import './Card.css'
import TicketsObj from '../tickets.json'
import getDataInfo from '../utilities/GetDataInfo'

export default function Card() {
  const tickets = [...TicketsObj.tickets]

  function getStopsString(stops: number) {
    switch (stops) {
      case 0:
        return ''
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
            src={`${tickets[0].carrier}.png`}
            alt={`${tickets[0].carrier} logo`}
            width={150}
          />
        </div>
        <button className="buy-part-btn">
          Купить <br /> за {tickets[0].price}
        </button>
      </div>
      <hr className="card-hr" />
      <div className="flight-info">
        <div className="flight-info-depart">
          <div className="flight-info-depart-time">
            {tickets[0].departure_time}
          </div>
          <div>
            <strong>
              {tickets[0].origin}, {tickets[0].origin_name}
            </strong>
          </div>
          <div>{getDataInfo(tickets[0].departure_date)}</div>
        </div>
        <div className="flight-info-stops">
          <div>{getStopsString(tickets[0].stops)}</div>
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
          <div className="flight-info-depart-time">
            {tickets[0].arrival_time}
          </div>
          <div>
            <strong>
              {tickets[0].destination}, {tickets[0].destination_name}
            </strong>
          </div>
          <div>{getDataInfo(tickets[0].arrival_date)}</div>
        </div>
      </div>
    </div>
  )
}
