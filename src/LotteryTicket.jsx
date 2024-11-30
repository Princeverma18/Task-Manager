import { useState } from "react"
import "./Lottery.css";
import { genTicket, sum} from "./helper";
import Ticket from "./Ticket";

export default function LotteryTicket({n, winningSum}) {

    let [ticket, setTicket] = useState(genTicket(n));

    let isWinning = sum(ticket)  === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }


    return (
        <div>
           <h1 className="style">{isWinning && "Congratulation, You won"}</h1>
           <h2>Lottery Game!</h2> 
           <h2>Lottery Ticket No.</h2>
           <Ticket ticket={ticket}/>
           <br />
           <button onClick={buyTicket}>New Ticket No.</button>
        </div>
    )
}