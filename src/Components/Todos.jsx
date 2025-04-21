import React from 'react'
import Todo from './Todo'
import "./Todos.css"

function Todos(props) {
  return (
    <section className='todos'>
        {        
            props.todos.map((todoEl) =>{
                return(
                    <Todo todo={todoEl.todo} key = {todoEl.id} id = {todoEl.id} onRemoveTodo = {props.onRemoveTodo}/>
                )
            })
        }
    </section>
  )
}

export default Todos