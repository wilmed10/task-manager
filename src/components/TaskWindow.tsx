import { useTask } from "../hooks/useTask"
import { Task } from "../types";

export default function TaskWindow() {

  const {state, dispatch} = useTask()

  const handleChangeState = (id: string, completed: boolean) => {
    dispatch({ type: 'change-state', payload: { id, completed } });
  };
  const handleEditTask = (task: Task) => {
    dispatch({ type: 'edit-task', payload: {edit: task} });
  };

  return (
    <>
      {state.tasks.map( task => {
        if(!task) return null;
        return(
          <div className="flex bg-white p-3 md:p-6 rounded-lg shadow-md place-content-between mb-3" key={task.id}>
              <div className="w-2/3 flex">
                <button 
                  className="cursor-pointer md:w-12"
                  onClick={() => dispatch({type: 'remove-task', payload:{id: task.id}})}
                >
                  <img src="./img/trash.png" alt="editar" />
                </button>
                <div className="flex flex-col mx-3 w-2/3">
                  <h2 className="text-lg font-bold">{task.title}</h2>
                  <p className="break-all max-h-32 overflow-y-auto ">{task.description}</p>   
                </div>
              </div>

              <div className="flex w-1/3 flex-col gap-1 max-h-16 m-auto md:flex-row">
                <button 
                  id={task.id}
                  className={!task.completed ?"bg-red-400 p-1 md:p-3 rounded w-full text-white font-bold cursor-pointer":"bg-green-400 p-1 md:p-3 rounded w-full text-white font-bold cursor-pointer"}
                  onClick={() => handleChangeState(task.id, !task.completed)}
                >
                  {task.completed ? 'Completado': 'Pendiente'}
                </button>
                <button
                  className="bg-gray-400 p-1 md:p-3 rounded mx-auto w-full md:w-1/3"
                  onClick={() => handleEditTask(task)}
                >
                  <img className="place-self-center" src="./img/editar.png" alt="editar" />
                </button>
              </div>
          </div>
        )
      })}
    </>
  )
}
