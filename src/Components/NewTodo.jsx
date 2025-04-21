import React, { useState } from 'react';
import './NewTodo.css';

function NewTodo(props) {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        priority: 'medium',
    });
    const { title, description, priority } = todo;

    const changeHandler = (e) => {
        const name = e.target.name;
        setTodo({
            ...todo, 
            [name]: e.target.value, 
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.handleTodo(todo)
        setTodo({
            title: '',
            description: '',
            priority: 'medium'
        });
    };

    return (
        <form className="new-todo-form" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-input" 
                    value={title}
                    onChange={changeHandler}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="form-input form-textarea"
                    value={description}
                    onChange={changeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="priority" className="form-label">Priority</label>
                <select
                    id="priority"
                    name="priority"
                    className="form-input form-select"
                    value={priority}
                    onChange={changeHandler}
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <button type="submit" className="submit-btn">Add Todo</button>
        </form>
    );
}

export default NewTodo;