import { useEffect, useState } from 'react'
import './StopsSelector.css'
import CheckboxOption from './CheckboxOption'

export default function StopsSelector() {
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)

  function handleCheckAll(checked: boolean) {
    setIsCheckedAll(checked)
    setIsChecked1(checked)
    setIsChecked2(checked)
    setIsChecked3(checked)
    setIsChecked4(checked)
  }

  useEffect(() => {
    if (
      isCheckedAll &&
      (!isChecked1 || !isChecked2 || !isChecked3 || !isChecked4)
    ) {
      setIsCheckedAll(!isCheckedAll)
    } else if (
      !isCheckedAll &&
      isChecked1 &&
      isChecked2 &&
      isChecked3 &&
      isChecked4
    ) {
      setIsCheckedAll(!isCheckedAll)
    }
  }, [isChecked1, isChecked2, isChecked3, isChecked4])

  return (
    <div className="stops-selector-container">
      <h5 className="stops-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <div className="checkbox-group">
        <CheckboxOption
          checked={isCheckedAll}
          option="Все"
          clickHandler={() => handleCheckAll(!isCheckedAll)}
        />
        <CheckboxOption
          checked={isChecked1}
          option="Без пересадок"
          clickHandler={() => setIsChecked1(!isChecked1)}
          onlyClickHandler={() => handleCheckAll(false)}
        />
        <CheckboxOption
          checked={isChecked2}
          option="1 пересадка"
          clickHandler={() => setIsChecked2(!isChecked2)}
          onlyClickHandler={() => handleCheckAll(false)}
        />
        <CheckboxOption
          checked={isChecked3}
          option="2 пересадки"
          clickHandler={() => setIsChecked3(!isChecked3)}
          onlyClickHandler={() => handleCheckAll(false)}
        />
        <CheckboxOption
          checked={isChecked4}
          option="3 пересадки"
          clickHandler={() => setIsChecked4(!isChecked4)}
          onlyClickHandler={() => handleCheckAll(false)}
        />
      </div>
    </div>
  )
}
