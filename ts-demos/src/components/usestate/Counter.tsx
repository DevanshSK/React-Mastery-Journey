import { useState } from "react";

const Counter = () => {
    // UseState without types.
    // const [count, setCount] = useState(0);
    
    // UseState with types.
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count Value: {count}</p>
            <div className="">
                <button onClick={() => setCount(c => c+1)} >Increment</button>
                <button onClick={() => setCount(c => c-1)} >Decrement</button>
            </div>
        </div>
    )
}

export default Counter