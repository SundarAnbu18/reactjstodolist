import React, { useState,useRef,useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LOCAL_STORAGE_KEY='todoApp.todos'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef=useRef()

  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function onAddTodo(e){
    const name=todoNameRef.current.value
    if(name === '')return
    setTodos(prevTodos=>{
      return[...prevTodos,{id:uuidv4(),name:name,complete:true}]
    })
    todoNameRef.current.value=null
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} variant="standard" /><br></br>
      <Button onClick={onAddTodo} variant="text">Add Todo</Button>
      <Button variant="text">Clear Complete</Button>
      <div>
        0 left items
      </div>
    </>
  );
}

export default App;
