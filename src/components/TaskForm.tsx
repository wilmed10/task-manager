import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, useState } from "react"
import { useTask } from "../hooks/useTask"
import { Task } from "../types"
import { categories } from '../data/categories'


const initialState = {
  id: uuidv4(),
  title: '',
  description: '',
  completed: false
}

export default function TaskForm() {

  const {dispatch} = useTask()
  const [task, setTask] = useState<Task>(initialState)

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if(id === 'status') {
      setTask({
        ...task,
        completed: value === '1'
      })
    } else {
      setTask({
        ...task,
        [id]: value
      })
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch({type: 'add-tasks', payload: {newTask: task} })

    setTask({
      ...initialState,
      id: uuidv4()
    })
  }
  
  return (
    <form 
      className="bg-white p-8 rounded-lg shadow-md"
      onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="text-md font-bold">
                  Tarea
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Escriba la tarea"
                  value={task.title}
                  onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="text-sm font-bold">
                  Descripcion
                </label>
                <textarea
                  id="description"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={task.description}
                  onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="status" className="text-sm font-bold">
                  Estado
                </label>
                <select
                    id="status"
                    className="w-full p-3 border border-gray-300 rounded"
                    value={ task.completed ? 1 : 0 }
                    onChange={handleChange}
                >
                  {categories.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.status}
                    </option>
                  ))}
                </select>
            </div>
            <input 
              type="submit"
              className="w-full bg-cyan-600 text-white p-2 rounded mt-4 font-bold hover:bg-cyan-700 cursor-pointer"
            />
        </form>
  )
}
