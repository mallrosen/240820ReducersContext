import { createContext, Dispatch } from "react";
import { IAction } from "../models/IAction";

export const TodoDispatchContext = createContext<Dispatch<IAction>>(()=>{
    return
})