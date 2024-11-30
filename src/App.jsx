import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import LotteryTicket from "./LotteryTicket.jsx";
import TicketNum from "./TicketNum.jsx";
import Ticket from './Ticket.jsx'


function App() {

  return (
    <>
     {/* <LudoBoard /> */}
     {/* <TodoList /> */}
     <LotteryTicket n={3} winningSum={15}/>
     {/* <TicketNum num={5} /> */}

    </>
  )
}

export default App
