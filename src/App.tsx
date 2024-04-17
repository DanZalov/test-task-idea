import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import './App.css'
import Card from './components/Card/Card'
import Options from './components/Options/Options'
import TicketsObj from './tickets.json'
import useExchangeRates from './hooks/useExchangeRates'

export type TicketData = (typeof TicketsObj.tickets)[0]

interface CurrencyContextProps {
  currencyIndex: number
  setCurrencyIndex: Dispatch<SetStateAction<number>>
  usdRate: number
  euroRate: number
}

interface StopsContextProps {
  value: boolean[]
  setValue: (index: number, value: boolean) => void
  setArray: (value: boolean) => void
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  currencyIndex: 1,
  setCurrencyIndex: () => {},
  usdRate: 0.01,
  euroRate: 0.01,
})
export const StopsContext = createContext<StopsContextProps>({
  value: [],
  setValue: () => {},
  setArray: () => {},
})

export default function App() {
  const tickets = [...TicketsObj.tickets]
  const [currency, setCurrency] = useState(1)
  const [stopArray, setStopArray] = useState<boolean[]>(new Array(4).fill(true))
  const [filteredTickets, setFilteredTickets] = useState(
    [...tickets].sort((ticketA, ticketB) => ticketA.price - ticketB.price),
  )

  function updateArrayElement(index: number, value: boolean) {
    const newArray = [...stopArray]
    newArray[index] = value
    setStopArray(newArray)
  }
  function updateWholeArray(value: boolean) {
    const newArray = new Array(4).fill(value)
    setStopArray(newArray)
  }

  const { usdRate, euroRate } = useExchangeRates()

  useEffect(() => {
    let tempTickets = [...tickets]
    stopArray.forEach((show, index) => {
      if (!show) {
        tempTickets = tempTickets.filter((ticket) => ticket.stops !== index)
      }
    })
    setFilteredTickets(
      tempTickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price),
    )
  }, [stopArray])

  return (
    <CurrencyContext.Provider
      value={{
        currencyIndex: currency,
        setCurrencyIndex: setCurrency,
        usdRate,
        euroRate,
      }}
    >
      <StopsContext.Provider
        value={{
          value: stopArray,
          setValue: updateArrayElement,
          setArray: updateWholeArray,
        }}
      >
        <div className="App">
          <Options />
          <div className="cards">
            {filteredTickets.map((ticket, index) => (
              <Card ticket={ticket} key={index} />
            ))}
          </div>
        </div>
      </StopsContext.Provider>
    </CurrencyContext.Provider>
  )
}
