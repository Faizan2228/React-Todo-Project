
import React, { useState, useEffect } from 'react';
import TaskItems from './TaskItems';
import '../App.css';
import localforage from 'localforage';

export default function AddTask() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localforage.getItem('todos').then((storedTodos) => {
      if (storedTodos) {
        setTodos(storedTodos);
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodos = [input, ...todos];
    setTodos(updatedTodos);
    localforage.setItem('todos', updatedTodos);
    setInput('');
  };

  return (
    <>
      <form className='inputForm' onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <input type='text' placeholder='Write your task' autoFocus value={input} onChange={(e) => setInput(e.target.value)} />
          <button type='submit'>Add</button>
        </div>
      </form>
      {Array.isArray(todos) && todos.map((item, index) => {
        return <TaskItems className='addItems' item={item} index={index} todos={todos} setTodos={setTodos} key={index} />;
      })}
    </>
  );
}
