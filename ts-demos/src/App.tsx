// # Component Prop Typing
// import Button from "./components/Button"
// import User from "./components/User"

import AdminInfo from "./components/reusable-types/AdminInfo"
import UserInfo from "./components/reusable-types/UserInfo"
import type { AdminInfoType, Info } from "./types/types"

// # Reusable Prop Types

const App = () => {

    // # Reusable Prop Types
    const user: Info = {
        id: 1,
        name: "John Doe",
        email: 'john@gmail.com',
    }
    const admin: AdminInfoType = {
        id: 2,
        name: "Jane Smith",
        email: 'jane@gmail.com',
        role: 'admin',
        lastLogin: new Date(),
    }
    // # Reusable Prop Types

    return (
        <div>

            {/* # Component Prop Typing */}
            {/* <User name="Alex" age={29} isStudent={true} />
            <Button 
                label="My Lucky Button"
                disabled={false}
                onClick={() => {
                    alert("This is first alert")
                }}
            />
            <Button 
                label="My Lucky Button"
                disabled={true}
                onClick={() => {
                    alert("This is second alert")
                }}
            /> */}
            {/* <User>
                <p>Hello there</p>
            </User> */}
            {/* # Component Prop Typing */}




            {/* # Reusable Prop Typing */}
            <UserInfo user={user} />
            <AdminInfo admin={admin} />
            {/* # Reusable Prop Typing */}
        </div>
    )
}

export default App