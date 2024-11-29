import { useState } from "react";

export default function LudoBoard(){
    let [move, setMove] = useState({blue :0, yellow :0, red :0, green :0}); // useState for Objects
    let [arr, SetArr] = useState("no moves");  // Array for useState

    // It is how to pass Object by Callback
    let updateBlue = () =>{
        setMove((prevMove) => {
            return {...prevMove, blue : prevMove.blue +1};
        });
        
        
        // It is how to pass Array by callback
        // SetArr((prevArr) => {
        //     return [...prevArr, "blue moves"];
        //     console.log(arr);
        // })
        
        // console.log(arr);
    };


    // It is how to pass Object by Callback
    let updateYellow = () =>{
        setMove((prevMove) => {
            return {...prevMove, yellow : prevMove.yellow +1}; // Spread and Update the value
        });
    }


    // It is how to pass Object by Callback
    let updateRed = () =>{
        setMove((prevMove) => {
            return {...prevMove, red : prevMove.red +1};
        });
    }


    // It is how to pass Object by Callback
    let updateGreen = () =>{
        setMove((prevMove) => {
            return {...prevMove, green : prevMove.green +1};
        });
    }
    return (
        <div>
        <p>Game Begins!</p>
        <p>{arr}</p>
        <div>
            <p>Blue move : {move.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick= {updateBlue}>+1</button>
            <p>Yellow move : {move.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick= {updateYellow}>+1</button>
            <p>Red move : {move.red}</p>
            <button style={{backgroundColor: "red"}} onClick= {updateRed}>+1</button>
            <p>Green move : {move.green}</p>
            <button style={{backgroundColor: "green"}} onClick= {updateGreen}>+1</button>
        </div>
        </div>
    );
}