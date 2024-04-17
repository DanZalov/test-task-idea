import { useContext } from 'react'
import { CurrencyContext } from '../../context/CurrencyContext'

interface CardBuyPartProps {
  ticketPrice: number
  carrier: string
}

export default function CardBuyPart({
  ticketPrice,
  carrier,
}: CardBuyPartProps) {
  const { currencyIndex, usdRate, euroRate } = useContext(CurrencyContext)

  function getPrice() {
    switch (currencyIndex) {
      case 1:
        return ticketPrice.toString() + ' ₽'
      case 2:
        return (ticketPrice * usdRate).toFixed(2) + ' $'
      default:
        return (ticketPrice * euroRate).toFixed(2) + ' \u20AC'
    }
  }

  return (
    <div className="buy-part">
      <div className="buy-part-airline">
        <img src={`${carrier}.png`} alt={`${carrier} logo`} width={150} />
      </div>
      <button className="buy-part-btn">
        Купить <br /> за {getPrice()}
      </button>
    </div>
  )
}
