import { useContext, useEffect, useState } from 'react'
import './StopsSelector.css'
import CheckboxOption from './CheckboxOption'
import { StopsContext } from '../../App'

export default function StopsSelector() {
  const {
    value: checkedArr,
    setValue: setCheckedArrElem,
    setArray,
  } = useContext(StopsContext)
  const [isCheckedAll, setIsCheckedAll] = useState(true)
  const stopsStringArr = [
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ]

  function handleCheckAll(checked: boolean) {
    setIsCheckedAll(checked)
    setArray(checked)
  }

  useEffect(() => {
    if (isCheckedAll && checkedArr.includes(false)) {
      setIsCheckedAll(!isCheckedAll)
    } else if (!isCheckedAll && !checkedArr.includes(false)) {
      setIsCheckedAll(!isCheckedAll)
    }
  }, [checkedArr])

  return (
    <div className="stops-selector-container">
      <h5 className="stops-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <div className="checkbox-group">
        <CheckboxOption
          checked={isCheckedAll}
          option="Все"
          clickHandler={() => handleCheckAll(!isCheckedAll)}
        />
        {checkedArr.map((checked, index) => {
          return (
            <CheckboxOption
              key={index}
              checked={checked}
              option={stopsStringArr[index]}
              clickHandler={() => setCheckedArrElem(index, !checked)}
              onlyClickHandler={() => handleCheckAll(false)}
            />
          )
        })}
      </div>
    </div>
  )
}
