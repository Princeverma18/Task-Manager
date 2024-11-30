import { useState } from "react";

/* uuidv4() ka use hm kisi individual task ko edit krna ho ya delete krna ho to uske liye use krte h */
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]); // It is for initial state in the form of object
    let [newTodo, setNewTodo] = useState(""); // It is for store new Task

    // It is adding the value in the list
    let addNewTask = () => {
        setTodos((prevTodo) =>{
            return [...prevTodo, {task: newTodo, id: uuidv4(), isDone:false}];  // new task ko hmne uuid ki help se add kr liya
        }); 
        setNewTodo("");
    };

    // It is for update the value which we are adding
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // It is for deleting the task
    let deleteTodo = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    };

    // It is for change all element into UpperCase
    // map method ki help hm ek sath sbhi elements m change kr skte h
    let upperCaseAll = () => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        )
    };


    // It is for change only one element in UpperCase
    // let upperCaseOne = () =>{
    //     setTodos((prevTodo) => 
    //         prevTodo.map((todo) => {
    //             if(todo.id == id){
    //                 return {
    //                     ...todo,
    //                     task: todo.task.toUpperCase(),
    //                 };
    //             }
    //         else{
    //             return todo;
    //         }
    // })
    //         )      
    // };
    

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
                    todos.map((todo) => (

                        // hm is key k through kisi bhi task ya id ko access kr skte h
                        <li key={todo.id}>
                        <span> {todo.task}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button style={{height: "40px", width: "50px", marginLeft :"10px", paddingLeft: "18px", marginBottom : "5px"}} onClick={() => deleteTodo(todo.id)}>{<i class="fa-solid fa-trash"></i>}</button>   
                        {/* <button onClick= {() => upperCaseOne(todo.id)}>Uppercase One</button> */}
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    )
}