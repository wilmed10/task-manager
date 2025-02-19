import TaskForm from "./components/TaskForm"
import TaskWindow from "./components/TaskWindow"

function App() {

  return (
    <>
      <header className="bg-cyan-800 py-8 max-h-24">
        <h1 className="font-black text-white text-4xl text-center">Gestion de tareas</h1>
      </header>
      <div className="flex flex-col mt-12 md:flex-row">
        <div className="md:w-1/3 mx-5 mb-10">
          <TaskForm/>
        </div>
        <div className="md:w-2/3 mx-5">
          <TaskWindow />
        </div>
      </div>
    </>
  )
}

export default App
