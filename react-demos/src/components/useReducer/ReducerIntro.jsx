import React, { useReducer } from 'react'
import { counterReducer } from './counterReducer';

// Initial state value for the useReducer state.
const initialState = {
    count: 0,
}

// Here we define how the state updates based on actions.
// const reducer = (state, action) => {
//     switch(action.type){
//         case "INCREMENT": 
//             return {...state, count: state.count + 1};
//         case "DECREMENT":
//             return {...state, count: state.count - 1};
//         case "RESET": 
//             return {...state, count: 0};
//     }
// }

const ReducerIntro = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            {/* Using state from the useReducer Hook. */}
            <h1>Count: {state.count}</h1>
            {/* Dispatching actions to update state methodically */}
            <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} >Add 5</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 3 })} >Decrease 3</button>
            <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>
        </div>
    )
}

export default ReducerIntro