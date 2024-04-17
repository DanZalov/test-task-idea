interface CheckboxOnlyOptionProps {
  handler: () => void
}

export default function CheckboxOnlyOption({
  handler,
}: CheckboxOnlyOptionProps) {
  return (
    <span className="checkbox-only-option" onClick={handler}>
      Только
    </span>
  )
}
