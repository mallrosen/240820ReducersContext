import { FormEvent, useContext, useState } from "react"
import { TodoDispatchContext } from "../contexts/TodoDispatchContext"

export const AddTodo = ()=>{
    const dispatch = useContext(TodoDispatchContext)
    const [userInput, setUserInput] = useState('')
 
const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()

    dispatch({
        type: "ADDED",
        payload:userInput
    })
    setUserInput('')

}

    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
    </form>
    
    </>
)}