import { useTask } from "../hooks/useTask"

export default function TaskWindow() {

  const {state, dispatch} = useTask()

  const handleChangeState = (id: string, completed: boolean) => {
    dispatch({ type: 'change-state', payload: { id, completed } });
  };

  return (
    <>
      {state.tasks.map( task => (
        <div className="flex bg-white p-8 rounded-lg shadow-md mb- place-content-between mb-3" key={task.id}>
            <div className="w-2/3">
              <h2 className="text-lg font-bold">{task.title}</h2>
              <p>{task.description}</p>   
            </div>

            <div className="w-1/3 flex gap-1">
              <button 
                id={task.id}
                className={!task.completed ?"bg-red-400 p-3 rounded w-full text-white font-bold":"bg-green-400 p-3 rounded w-full text-white font-bold"}
                onClick={() => handleChangeState(task.id, !task.completed)}
              >
                {task.completed ? 'Completado': 'Pendiente'}
              </button>
              <button
                className="bg-gray-400 p-3 rounded"
              >
                <img src="../img/editar.png" alt="editar" />
              </button>
            </div>
        </div>
      ))}
    </>
  )
}
