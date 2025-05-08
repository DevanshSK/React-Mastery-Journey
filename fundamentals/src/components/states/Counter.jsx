import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCountChange = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCountChange}>Increase</button>
        </div>
    )
}

export default Counter