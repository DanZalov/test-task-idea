import { useState } from 'react'
import CurrencySelector from './CurrencySelector'
import StopsSelector from './StopsSelector'

export default function Options() {
  return (
    <div className="options">
      <CurrencySelector />
      <StopsSelector />
    </div>
  )
}
