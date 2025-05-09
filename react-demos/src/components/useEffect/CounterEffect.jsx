import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    return (
        <div>
            <h2>Count Exercise for useEffect {count}</h2>
            <button onClick={() => setCount(c => c + 1)}>Increase</button>
        </div>
    )
}

export default CounterEffect