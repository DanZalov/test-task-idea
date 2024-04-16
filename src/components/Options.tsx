import { useState } from 'react'
import CurrencySelector from './CurrencySelector'

type CurrencyType = 'RUB' | 'USD' | 'EURO'

export default function Options() {
  const [currency, setCurrency] = useState<CurrencyType>('RUB')
  const [stopArray, setStopArray] = useState<boolean[]>(new Array(4).fill(true))
  return (
    <div className="options">
      <CurrencySelector />
      <div className="stop-selector"></div>
    </div>
  )
}
