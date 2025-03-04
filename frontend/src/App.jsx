import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${apiUrl}/todos`)
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
    }, []);

    const addTodo = () => {
        if (task.trim()) {
            axios.post(`${apiUrl}/todos`, { task })
                .then(res => setTodos([...todos, res.data]))
                .catch(err => console.log(err));
            setTask('');
        }
    };

    const deleteTodo = (id) => {
        axios.delete(`${apiUrl}/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="todo-app">
                <h2 className="title">To-Do List</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="Add a new task..."
                        className="task-input"
                    />
                    <button onClick={addTodo} className="add-btn">Add</button>
                </div>

                <ul className="todo-list">
                    {todos.map(todo => (
                        <li key={todo._id} className="todo-item">
                            <span className="todo-text">{todo.task}</span>
                            <button onClick={() => deleteTodo(todo._id)} className="delete-btn">❌</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
