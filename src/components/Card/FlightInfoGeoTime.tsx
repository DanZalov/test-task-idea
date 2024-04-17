import getDateInfo from '../../utilities/GetDateInfo'

interface FlightInfoGeoTimeProps {
  time: string
  date: string
  airport: string
  city: string
  depart: boolean
}

export default function FlightInfoGeoTime({
  time,
  date,
  airport,
  city,
  depart,
}: FlightInfoGeoTimeProps) {
  return (
    <div className={depart ? 'flight-info-depart' : 'flight-info-dest'}>
      <div className="flight-info-depart-time">{time}</div>
      <div>
        <strong>
          {airport}, {city}
        </strong>
      </div>
      <div>{getDateInfo(date)}</div>
    </div>
  )
}
