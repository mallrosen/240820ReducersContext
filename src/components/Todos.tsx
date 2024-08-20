import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { TodoDispatchContext } from "../contexts/TodoDispatchContext"

export const Todos = ()=>{

    const todos = useContext(TodoContext)
    const dispatch = useContext(TodoDispatchContext)

    const removeTodo = (id:number)=>{
        dispatch({
            type: "REMOVED",
            payload: id.toString()
        })
    }
    const toggleTodo = (id:number)=>{
        dispatch({
            type: "TOGGLED",
            payload: id.toString()
        })
    }

    return (
    <>  
    <ul>
        {todos.map((todo) => ( 
            <div key={todo.id}>
           <li
           className={todo.done? "done" : ""}
           >{todo.text}</li>
           <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
           <button onClick={()=> toggleTodo(todo.id)}>Klar</button>
           </div> 
        ))}
    </ul>
    </>
)}

