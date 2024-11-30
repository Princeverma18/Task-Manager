import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LotteryTicket from "./LotteryTicket.jsx";
import TicketNum from "./TicketNum.jsx";
import Ticket from './Ticket.jsx'


function App() {

  return (
    <>
     <LotteryTicket n={3} winningSum={15}/>
    </>
  )
}

export default App
