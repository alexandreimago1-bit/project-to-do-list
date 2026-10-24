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
const App = () => {
  const [task, setTask] = useState(taskList)

  return(
    <div>
      <h1>Tasks</h1>
       <ul>
        {taskList.map(task => 
          <li key={task.id}>{task.name} - {task.importance}</li>
        )}
       </ul>
    </div>
  )
}
export default App
