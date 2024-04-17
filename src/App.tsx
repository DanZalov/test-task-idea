import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Options from './components/Options/Options'
import useExchangeRates from './hooks/useExchangeRates'
import { CurrencyContext } from './context/CurrencyContext'
import { StopsContext } from './context/StopsContext'
import useTickets from './hooks/useTickets'

export default function App() {
  const [currency, setCurrency] = useState(1)
  const [stopArray, setStopArray] = useState<boolean[]>(new Array(4).fill(true))

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
  const { filteredTickets } = useTickets({ stopArray })

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
            {!filteredTickets[0] ? (
              <h1 className="no-cards">Рейсов не найдено...</h1>
            ) : null}
          </div>
        </div>
      </StopsContext.Provider>
    </CurrencyContext.Provider>
  )
}
