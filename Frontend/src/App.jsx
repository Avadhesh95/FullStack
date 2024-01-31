import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [todos, setToDos] = useState([]);

  useEffect(()=>{
    axios.get('/api/todos').then(res=>{
      setToDos(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  });

  return (
    <>
      <h1>Hello MySelf Avadhesh kumar</h1>
      <p>ToDos: {todos.length}</p>
      {todos.map((todo, index) => {
        return(
          <div key={index}>
            <p>User: {todo.userId}</p>
            <p>Title: {todo.title}</p>
            <p>Status: {todo.completed}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
