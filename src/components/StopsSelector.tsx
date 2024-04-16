import { useEffect, useState } from 'react'
import './StopsSelector.css'

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
        <label>
          <input
            type="checkbox"
            checked={isCheckedAll}
            onClick={() => handleCheckAll(!isCheckedAll)}
          />
          <span className="custom-checkbox"></span>
          Все
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked1}
            onClick={() => setIsChecked1(!isChecked1)}
          />
          <span className="custom-checkbox"></span>
          <span>Без пересадок</span>
          <span
            className="checkbox-only-option"
            onClick={() => handleCheckAll(false)}
          >
            Только
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked2}
            onClick={() => setIsChecked2(!isChecked2)}
          />
          <span className="custom-checkbox"></span>
          <span>1 пересадка</span>
          <span
            className="checkbox-only-option"
            onClick={() => handleCheckAll(false)}
          >
            Только
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked3}
            onClick={() => setIsChecked3(!isChecked3)}
          />
          <span className="custom-checkbox"></span>
          <span>2 пересадки</span>
          <span
            className="checkbox-only-option"
            onClick={() => handleCheckAll(false)}
          >
            Только
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked4}
            onClick={() => setIsChecked4(!isChecked4)}
          />
          <span className="custom-checkbox"></span>
          <span>3 пересадки</span>
          <span
            className="checkbox-only-option"
            onClick={() => handleCheckAll(false)}
          >
            Только
          </span>
        </label>
      </div>
    </div>
  )
}
