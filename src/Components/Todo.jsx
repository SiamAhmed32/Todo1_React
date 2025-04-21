import React from 'react'
import "./Todo.css"
// import { MdDeleteForever } from "react-icons/md";

const Todo = (props) => {
    const {title, description, priority} = props.todo
    const {id} = props
    const handleClick = (id)=> {
        props.onRemoveTodo(id)
    }
// In Todo.jsx
    return (
        <article className={`todo todo-${priority}`}> {/* Dynamic class */}
        <div className="todo-content">
            <div className="todo-header">
            <h2>{title}</h2>
            <span className={`priority-badge priority-${priority}`}>
                {priority}
            </span>
            </div>
            <p><span className='description'>Description : </span>{description}</p>
        </div>
        <button className='btn' onClick={() => handleClick(id)}>
            <i className='fa fa-trash fa-2x'></i>
        </button>
        </article>
    )
}

export default Todo