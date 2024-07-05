import React from 'react'
import AddTask from './Component/AddTask'
import TaskItems from './Component/TaskItems'
import Header from './Component/Header'



function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <TaskItems />
    </div>
  )
}

export default App