import CheckboxOnlyOption from './CheckboxOnlyOption'

interface CheckboxOptionProps {
  option: string
  checked: boolean
  clickHandler: () => void
  onlyClickHandler?: () => void
}

export default function CheckboxOption({
  checked,
  option,
  clickHandler,
  onlyClickHandler,
}: CheckboxOptionProps) {
  return (
    <label>
      <input type="checkbox" checked={checked} onClick={clickHandler} />
      <span className="custom-checkbox"></span>
      <span>{option}</span>
      {onlyClickHandler && <CheckboxOnlyOption handler={onlyClickHandler} />}
    </label>
  )
}
