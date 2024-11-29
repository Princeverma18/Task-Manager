import { useState } from "react";


export default function TodoList(){
    let [todo, setTodo] = useState(["Sample task"]); // It is for initial state
    let [newTodo, setNewTodo] = useState(""); // It is for store new Task

    // It is adding the value in the list
    let addNewTask = () => {
        setTodo([...todo, newTodo]);
        setNewTodo("");
    };

    // It is for update the value which we are adding
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    // It is for deleting the task
    let deleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };
    

    return (                         
        <div>
            <h1>To Do List</h1>
            <input placeholder="  add a task" 
                   value={newTodo} 
                   onChange={updateTodoValue} style={{border: "2px solid black", borderRadius : "10px", height : "25px", width:"300px"}}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br />

            <hr />
            <h2>Task List</h2>
            <ul>
                {
                    todo.map((task, index) => (
                        <li key={index}>{task}
                        <button style={{height: "40px", width: "10px", marginLeft :"10px", paddingLeft: "6px", marginBottom : "5px"}} onClick={() =>deleteTask(index)}>{<i class="fa-solid fa-trash"></i>}</button></li>
                    ))
                }
            </ul>
        </div>
    )
}