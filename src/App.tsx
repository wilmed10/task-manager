import TaskForm from "./components/TaskForm"
import TaskWindow from "./components/TaskWindow"

function App() {

  return (
    <>
      <header className="bg-cyan-800 py-4 max-h-24">
        <h1 className="font-black text-white text-4xl text-center">Administrador de tareas colaborativo</h1>
      </header>
      <div className="flex mt-12">
        <div className="w-1/3 mx-5">
          <TaskForm/>
        </div>
        <div className="w-2/3 mx-5">
          <TaskWindow />
        </div>
      </div>
    </>
  )
}

export default App
