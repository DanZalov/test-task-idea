export default function getDataInfo(dateString: string) {
  // dateString = '12.05.18';
  const parts = dateString.split('.')
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1
  const year = parseInt(parts[2], 10) + 2000

  const date = new Date(year, month, day)

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  })
  const formattedDate = formatter.format(date)
  const formattedDay = formatter.formatToParts(date)[0].value
  return `${formattedDate.slice(3)}, ${
    formattedDay[0].toLocaleUpperCase() + formattedDay[1]
  }`
}
