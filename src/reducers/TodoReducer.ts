import { IAction } from "../models/IAction";
import { Todo } from "../models/Todo";

export const TodoReducer = (todos:Todo[], action:IAction) => {

    if(action.type === "ADDED"){
        return [...todos, new Todo(action.payload)]
    } 
    if(action.type === "REMOVED"){
        return todos.filter((todo) => todo.id!== +action.payload)
    }
    if(action.type === "TOGGLED"){
        return todos.map((todo)=>{
            if(todo.id === +action.payload){
                return {...todo, done: !todo.done }
            } return todo
        })
        
    }
        return todos;
}