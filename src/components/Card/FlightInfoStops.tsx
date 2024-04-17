interface FlightInfoStopsProps {
  stops: number
}

export default function FlightInfoStops({ stops }: FlightInfoStopsProps) {
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
    <div className="flight-info-stops">
      <div>{getStopsString(stops)}</div>
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
  )
}
