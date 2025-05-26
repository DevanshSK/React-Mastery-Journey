import { useContext } from "react";
import { MyContext } from "./context/myContext";

const ContextCounter = () => {
    const { count, increment, decrement } = useContext(MyContext);

    return (
        <div>
            <h2>Context Counter</h2>
            <p>Count Value #{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ContextCounter