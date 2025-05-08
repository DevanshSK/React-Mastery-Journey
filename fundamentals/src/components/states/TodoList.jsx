import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputVal.trim()){
            setTodos(prev => [...prev, inputVal]);
            setInputVal("");
        }
    }

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }


    return (
        <div>
            <h1>My Todos</h1>
            <ul>
                {todos.map((t, index) => (<li key={t + index}>{t}</li>))}
            </ul>
            <form onSubmit={handleSubmit}>
                <h3>Add new Todo</h3>
                <input type="text" value={inputVal} onChange={handleInputChange} placeholder="Add a new note" />
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}

export default TodoList