import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            {/* <p>Ticket No.</p> */}
            {ticket.map((num, idx) => {
                return <TicketNum num={num} key={idx}  />
            })}
        </div>
    )
}