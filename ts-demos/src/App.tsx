// # Component Prop Typing
// import Button from "./components/Button"
// import User from "./components/User"

// # Reusable Prop Types
// import AdminInfo from "./components/reusable-types/AdminInfo"
// import UserInfo from "./components/reusable-types/UserInfo"
// import type { AdminInfoType, Info } from "./types/types"

// # Types for UseState
// import UseStateIntro from "./components/usestate/UseStateIntro"

// # Forms, Events and Refs
// import RFEIntro from "./components/ref-forms-and-events/RFEIntro"

// # Context API in TS
// import ContextIntro from "./components/context-api/ContextIntro";

// # useReducer in TS
// import UseReducerIntro from "./components/use-reducers/UseReducerIntro"

// # useEffect in TS
import UseEffectIntro from "./components/use-effect/UseEffectIntro"




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
            {/* <RFEIntro /> */}
            {/* # Types for useRefs, forms and Events */}

            {/* # Context API in TS */}
            {/* <ContextIntro /> */}
            {/* # Context API in TS */}

            {/* # UseReducer in TS */}
            {/* <UseReducerIntro /> */}
            {/* # UseReducer in TS */}

            {/* # useEffect in TS */}
            <UseEffectIntro />
            {/* # useEffect in TS */}
        </div>
    )
}

export default App