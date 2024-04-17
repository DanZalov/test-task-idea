export default async function getExchangeRate() {
  try {
    const response = await fetch(`https://www.cbr-xml-daily.ru/latest.js`)
    const data = await response.json()
    return { usd: data.rates.USD, euro: data.rates.EUR }
  } catch (error) {
    console.error('Ошибка при получении курса обмена валют:', error)
    return null
  }
}
