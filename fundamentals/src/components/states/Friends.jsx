import { useState } from "react";

const Friends = () => {

    const [friends, setFriends] = useState(["Abhay", "Nitin", "Rahul"]);

    const addFriend = () => {
        setFriends(prev => [...prev, "Devansh"]);
    }

    const removeFriend = () => {
        setFriends(friends.filter(f => f !== "Abhay"));
    }

    const updateFriend = () => {
        setFriends(friends.map(f => f === 'Abhay' ? "Abhay Gupta" : f));
    }
 
    return (
        <div>
            {
                friends.map((f) => (
                    <li key={f}>{f}</li>
                ))
            }

            <button onClick={addFriend}>Add new friend</button>
            <button onClick={removeFriend}>Remove one friend</button>
            <button onClick={updateFriend}>Update one friend</button>
        </div>
    )
}

export default Friends