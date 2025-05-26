import { useState } from 'react'

interface User {
    name: string;
    age: number;
    email: string;
}


const UserProfile = () => {
    const [user, setUser] = useState<User>(
        {
            name: "David",
            age: 31,
            email: "david@gmail.com",
        }
    );

    return (
        <div>
            <h1>User Profile Details</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Email: {user.email}</li>
            </ul>
        </div>
    )
}

export default UserProfile