import './App.css'
import Card from './components/Card'
import Options from './components/Options'
import TicketsObj from './tickets.json'

export type TicketData = (typeof TicketsObj.tickets)[0]

export default function App() {
  const tickets = [...TicketsObj.tickets]
  return (
    <div className="App">
      <Options />
      <div className="cards">
        {tickets.map((ticket) => (
          <Card ticket={ticket} />
        ))}
      </div>
    </div>
  )
}
