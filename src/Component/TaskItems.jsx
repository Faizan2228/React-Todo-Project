import React, { useState, useEffect } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import localforage from 'localforage';


export default function TaskItems({ item, index, todos, setTodos }) {

  const [taskDone, setTaskDone] = useState(false)
  

  const handleRemove = (indexToRemove) => {
    const updatedTodos = todos.filter((_, idx) => idx !== indexToRemove);    setTodos(updatedTodos);
    localforage.setItem('todos', updatedTodos)
    setTaskDone(false)
   }
   
  return (
    <div>
      {item && <div className='taskContainer' key={index}>
        <div  className={taskDone ? 'cutWord' : ''} onClick={() => setTaskDone(!taskDone)}>
          <h2 id='taskList' >{item}</h2>
        </div>
        <div className='taskIcons'>
          <FontAwesomeIcon icon={faTrash} size={'2x'} className='icon' onClick={() => handleRemove(index)} />
        </div>
      </div>}
    </div>
  )
}

