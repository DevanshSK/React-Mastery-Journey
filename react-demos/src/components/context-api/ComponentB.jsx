import React from 'react'
import ComponentC from './ComponentC'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'
import { UserProvider } from './UserContext'

const ComponentB = () => {
    return (
        <UserProvider>
            <div>
                <h2>Component B</h2>
                <ComponentC />
                <UserProfile />
                <UpdateUser />
            </div>
        </UserProvider>
    )
}

export default ComponentB