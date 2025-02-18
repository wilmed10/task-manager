import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { initialState, taskReducer, tasksActions, tasksState } from "../reducers/task-reducer"

type TaskProviderProps = {
    children: ReactNode;
}

type TaskContextProps = {
    state: tasksState;
    dispatch: Dispatch<tasksActions>;
}

export const TaskContext = createContext<TaskContextProps>(null!)

export const TaskProvider = ({children} : TaskProviderProps) => {
    
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

