import React, {useState} from 'react'
import Todos from './Todos';
import "./Home.css"
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid"

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (todo) =>{
        setTodos([{id: uuidv4(), todo}, ...todos])
    }
    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) =>{
                return todo.id != id
            })
            return filteredTodos;
        })
    }
  return (
    <div className='container'>
        <h1 className='title'>Todo App</h1>
        <NewTodo handleTodo = {handleAddTodo}/>
        <Todos todos = {todos} onRemoveTodo = { handleRemoveTodo } />
    </div>
  )
}

export default Home