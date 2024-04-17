import { useState, useEffect } from 'react'

export default function useExchangeRates() {
  const [usdRate, setUsdRate] = useState(0.01)
  const [euroRate, setEuroRate] = useState(0.01)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await fetch('https://www.cbr-xml-daily.ru/latest.js')
        const data = await response.json()
        setUsdRate(data.rates.USD)
        setEuroRate(data.rates.EUR)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getExchangeRate()
  }, [])

  return { usdRate, euroRate, loading, error }
}
