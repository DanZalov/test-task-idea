import { Dispatch, SetStateAction, createContext } from 'react'

interface CurrencyContextProps {
  currencyIndex: number
  setCurrencyIndex: Dispatch<SetStateAction<number>>
  usdRate: number
  euroRate: number
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  currencyIndex: 1,
  setCurrencyIndex: () => {},
  usdRate: 0.01,
  euroRate: 0.01,
})
