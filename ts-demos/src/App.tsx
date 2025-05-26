// # Component Prop Typing
// import Button from "./components/Button"
// import User from "./components/User"

import RFEIntro from "./components/ref-forms-and-events/RFEIntro"
// import UseStateIntro from "./components/usestate/UseStateIntro"

// # Reusable Prop Types
// import AdminInfo from "./components/reusable-types/AdminInfo"
// import UserInfo from "./components/reusable-types/UserInfo"
// import type { AdminInfoType, Info } from "./types/types"


// # Types for UseState


const App = () => {

    // # Reusable Prop Types
    // const user: Info = {
    //     id: 1,
    //     name: "John Doe",
    //     email: 'john@gmail.com',
    // }
    // const admin: AdminInfoType = {
    //     id: 2,
    //     name: "Jane Smith",
    //     email: 'jane@gmail.com',
    //     role: 'admin',
    //     lastLogin: new Date(),
    // }
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
            {/* <UserInfo user={user} />
            <AdminInfo admin={admin} /> */}
            {/* # Reusable Prop Typing */}




            {/* # Types for UseState */}
            {/* <UseStateIntro /> */}
            {/* # Types for UseState */}

            {/* # Types for useRefs, forms and Events */}
            <RFEIntro />
            {/* # Types for useRefs, forms and Events */}
        </div>
    )
}

export default App