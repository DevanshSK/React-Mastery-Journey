import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import "./style.css";

const Todo = () => {
    const [ todos, setTodos ] = useState([]);
    const [ input, setInput ] = useState("");

    const handleSubmit = () => {
        if(!input.trim()) {
            alert("Please enter some text in the input");
            return;
        };

        setTodos((t) => [...t, {
            text: input,
            id: uuid(),
        }]);
        setInput("");
    }

    console.log(todos)

    const removeTodo = (id) => setTodos((t) => t.filter(todo => todo.id !== id));

    return (
        <div className='container'>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='New Todo'
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul className='todos-list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='todo'>
                        <span>{todo.text}</span>
                        <button
                            className='close'
                            onClick={() => removeTodo(todo.id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Todo