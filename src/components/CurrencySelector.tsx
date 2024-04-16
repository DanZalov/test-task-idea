import { useState } from 'react'
import './CurrencySelector.css'

export default function CurrencySelector() {
  const [activeOption, setActiveOption] = useState(1)

  return (
    <div className="currency-selector-container">
      <h5 className="currency-title">ВАЛЮТА</h5>
      <div className="currency-selector-wrapper">
        <button
          className={`currency-selector-option ${
            activeOption === 1 ? 'active' : ''
          }`}
          onClick={() => setActiveOption(1)}
        >
          RUB
        </button>
        <button
          className={`currency-selector-option ${
            activeOption === 2 ? 'active' : ''
          }`}
          onClick={() => setActiveOption(2)}
        >
          USD
        </button>
        <button
          className={`currency-selector-option ${
            activeOption === 3 ? 'active' : ''
          }`}
          onClick={() => setActiveOption(3)}
        >
          EUR
        </button>
      </div>
    </div>
  )
}
