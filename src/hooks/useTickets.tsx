import { useEffect, useState } from 'react'
import TicketsObj from '../tickets.json'

export type TicketData = (typeof TicketsObj.tickets)[0]

interface useTicketsProps {
  stopArray: boolean[]
}

export default function useTickets({ stopArray }: useTicketsProps) {
  const tickets = [...TicketsObj.tickets]
  const [filteredTickets, setFilteredTickets] = useState(
    [...tickets].sort((ticketA, ticketB) => ticketA.price - ticketB.price),
  )

  useEffect(() => {
    let tempTickets = [...tickets]
    stopArray.forEach((show, index) => {
      if (!show) {
        tempTickets = tempTickets.filter((ticket) => ticket.stops !== index)
      }
    })
    setFilteredTickets(
      tempTickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price),
    )
  }, [stopArray])

  return { filteredTickets }
}
