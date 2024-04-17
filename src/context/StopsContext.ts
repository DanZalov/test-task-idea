import { createContext } from 'react'

interface StopsContextProps {
  value: boolean[]
  setValue: (index: number, value: boolean) => void
  setArray: (value: boolean) => void
}

export const StopsContext = createContext<StopsContextProps>({
  value: [],
  setValue: () => {},
  setArray: () => {},
})
