import React, { useState,useRef,useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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


  
 function BasicAlerts(e) {
  return (
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    </>
    
  );
} function onAddTodo(e){
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
      <Button variant="text" onClick={BasicAlerts}>Clear Complete</Button>
      <div>
        0 left items hdhdh
      </div>
    </>
  );
}

export default App;
