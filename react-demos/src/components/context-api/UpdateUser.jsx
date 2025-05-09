import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            updateUser(input);
            setInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <label htmlFor="username">UserName: </label>
            <input id='username' name='username' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Update Username</button>
        </form>
    )
}

export default UpdateUser