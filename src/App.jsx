import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function App(){
const [tasks, setTasks] = useState([])

function addTask(title, description, status){
  const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    status: status,
  }

  setTasks((prevTask) => [...prevTask, newTask])
}

function deleteTask(id){
  setTasks((prevTask) => prevTask.filter((task) => task.id !== id ))
}

function updateTaskStatus(id, newStatus){
  setTasks((prevTask) => prevTask.map((task) => task.id === id ? {...task, status: newStatus}: task))
}


  return (
    <div>
      <TaskForm onAddTask={addTask}/>
      <TaskList onDeleteTask={deleteTask} taskProp={tasks} onUpdateTaskStatus={updateTaskStatus}/>
    </div>
  )
}