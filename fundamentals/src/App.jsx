// import ExampleRandom from './components/ExampleRandom'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import WelcomeMessage from './components/WelcomeMessage'

import { useState } from "react"
import ExampleOne from "./components/states/ExampleOne";
import ExampleTwo from "./components/states/ExampleTwo";
import ExampleThree from "./components/states/ExampleThree";
// import Friends from "./components/states/Friends";
// import Movies from "./components/states/Movies";


// import Button from "./components/events/Button"
// import Copy from "./components/events/Copy"
// import Move from "./components/events/Move"

// import IconComponent from "./components/stylings/IconComponent"
// import ProfileCard from "./components/stylings/ProfileCard"
// import StyledCard from "./components/stylings/StyledCard"

// import CopyInput from "./components/portals/CopyInput"


const App = () => {

    // State in react
    const [counter, setCounter] = useState(0)
    console.log(counter);

    return (
        <div>
            {/* <CopyInput /> */}

            {/* STYLES IN REACT */}

            {/* <StyledCard 
                title="Test Title"
                description="Ratione debitis odio consectetur."
            /> */}
            {/* <ProfileCard 
                title="Test Profile"
                description="Ratione debitis odio consectetur."
            /> */}
            {/* <IconComponent /> */}

            {/* Events in React */}
            {/* <Button />
            <Copy />
            <Move /> */}
            <p>Test {counter}</p>
            <button onClick={() => setCounter(count => count + 1)} >
                Add
            </button>
            <button onClick={() => setCounter(counter - 1)} >
                Subtract
            </button>

            <ExampleOne />
            <ExampleTwo />
            <ExampleThree />

            {/* <Friends /> */}
            {/* <Movies /> */}
        </div>
    )
}

export default App