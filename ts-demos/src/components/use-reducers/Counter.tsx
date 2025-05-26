import { useReducer } from 'react'

type Action = {
    type: "INCREMENT" | "DECREMENT";
}
type State = {
    count: number;
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const initialState: State = { count: 0 };

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count #{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
        </div>
    )
}

export default Counter