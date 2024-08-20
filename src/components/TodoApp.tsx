import { useReducer } from 'react';
import { Todos } from './Todos'; // Import the 'Todos' component
import { TodoContext } from '../contexts/TodoContext';
import { TodoDispatchContext } from '../contexts/TodoDispatchContext';
import { TodoReducer } from '../reducers/TodoReducer';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, [])


    return (<>
        <TodoDispatchContext.Provider value={dispatch}>
        <TodoContext.Provider value={todos}>
            <AddTodo></AddTodo>
            <Todos></Todos>
        </TodoContext.Provider>
        </TodoDispatchContext.Provider>
    </>
)}