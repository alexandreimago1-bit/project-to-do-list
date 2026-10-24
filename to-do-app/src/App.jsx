import { useState } from 'react'
  const taskList = [
    {
      id: 1,
      name: 'Very Important',
      importance: 'High'
    },
    {
      id: 2,
      name: 'Something Important',
      importance: 'Medium'
    },
    {
      id: 3,
      name: 'Something not that Important',
      importance: 'Low'
    }
  ]

  const generateId = () => {
    const maxId = taskList.length > 0
      ? Math.max(...taskList.map(task => task.id))
      : 0
    return maxId + 1
  }

const App = () => {
  const [tasks, setTasks] = useState(taskList)
  const [taskName, setTaskName] = useState('')
  const [taskImportance, setTaskImportance] = useState('')

  const handleTaskName = (event) =>{
    console.log(event.target.value)
    setTaskName(event.target.value)
  }

  const handleTaskImportance = (event) => {
    console.log(event.target.value)
    setTaskImportance(event.target.value)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    const taskObject = {
      id: generateId(),
      name: taskName.trim(),
      importance: taskImportance.trim()
    }
    setTasks(taskList.concat(taskObject))
    setTaskName('')
    setTaskImportance('')
  }
  return(
    <div>
      <form onSubmit={handleAddTask}>
        <div>
          <label>task:</label>
          <input type="text" value={taskName} onChange={handleTaskName}/>
        </div>
        <div>
          <label>importance:</label>
          <input type="text" value={taskImportance} onChange={handleTaskImportance}/>
        </div>
        <button type='submit'>Add</button>
      </form>
      <h1>Tasks</h1>
       <ul>
        {tasks.map(task => 
          <li key={task.id}>{task.name} - {task.importance}</li>
        )}
       </ul>
    </div>
  )
}
export default App
