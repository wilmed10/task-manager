//import { v4 as uuidv4 } from 'uuid'
import { Task } from '../types'

// tipo de state
export type tasksState = {
    tasks: Task[];
    edit: boolean;
    taskEdited: Task;
}

// tipo de acciones
export type tasksActions = 
    { type: 'add-task', payload: {newTask: Task} } |
    { type: 'edit-task', payload: {edit: Task}} |
    { type: 'remove-task', payload: {id: Task['id']} } |
    { type: 'change-state', payload: {id: Task['id'], completed: boolean} } 

// estado inicial
export const initialState : tasksState = {
    tasks: [],
    edit: false,
    taskEdited: {
        id: '',
        title: '',
        description: '',
        completed: false
    },
}

// reducer
export const taskReducer = (
    state: tasksState = initialState,
    action: tasksActions
) => {

    if (action.type === 'add-task') {
        return {
            ...state,
            tasks: state.edit ? state.tasks.map( task => {
                if(task.id === action.payload.newTask.id) {
                    return {
                        ...task,
                        ...action.payload.newTask,
                    }
                }
                return task;
            } ) : [...state.tasks, action.payload.newTask],
            edit: false,
            taskEdited: initialState.taskEdited,
        }
    }
    if (action.type === 'edit-task') {
        return {
            ...state,
            edit: true,
            taskEdited: action.payload.edit
        }
    }
    if (action.type === 'remove-task') {
        return {
            ...state,
            tasks: state.tasks.filter( task => task.id !== action.payload.id )
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