import { useContext } from 'react'
import './CurrencySelector.css'
import { CurrencyContext } from '../../context/CurrencyContext'

export default function CurrencySelector() {
  const { currencyIndex: activeOption, setCurrencyIndex: setActiveOption } =
    useContext(CurrencyContext)
  const currencyTitleArr = ['RUB', 'USD', 'EUR']
  return (
    <div className="currency-selector-container">
      <h5 className="currency-title">ВАЛЮТА</h5>
      <div className="currency-selector-wrapper">
        {currencyTitleArr.map((currency, index) => {
          return (
            <button
              key={index}
              className={`currency-selector-option ${
                activeOption === index + 1 ? 'active' : ''
              }`}
              onClick={() => setActiveOption(index + 1)}
            >
              {currency}
            </button>
          )
        })}
      </div>
    </div>
  )
}
