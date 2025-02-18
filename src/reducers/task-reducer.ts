//import { v4 as uuidv4 } from 'uuid'
import { Task } from '../types'

// tipo de state
export type tasksState = {
    tasks: Task[];
    modal: boolean;
}

// tipo de acciones
export type tasksActions = 
    { type: 'add-tasks', payload: {newTask: Task} } |
    { type: 'edit-tasks', payload: {id: Task['id']} } |
    { type: 'remove-tasks', payload: {id: Task['id']} } |
    { type: 'change-state', payload: {id: Task['id'], completed: boolean} } 

// estado inicial
export const initialState : tasksState = {
    tasks: [],
    modal: false,
}

// reducer
export const taskReducer = (
    state: tasksState = initialState,
    action: tasksActions
) => {

    if (action.type === 'add-tasks') {
        return {
            ...state,
            tasks: [...state.tasks, action.payload.newTask],
        }
    }
    if (action.type === 'edit-tasks') {
        return {
            ...state,
            
        }
    }
    if (action.type === 'remove-tasks') {
        return {
            ...state,
            tasks: state.tasks.filter( tasks => tasks.id !== action.payload.id )
        }
    }
    if (action.type === 'change-state') {
        return {
            ...state,
            tasks: state.tasks.map(task => 
                task.id === action.payload.id ? {...task, completed: action.payload.completed} : task
            ),
            /* tasks: [...state.tasks, action.payload.id] */
        }
    }

    return state
}