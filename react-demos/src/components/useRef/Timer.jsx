import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const intervalId = useRef(null);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);

    const stopInterval = () => {
        setStatus(false);
    }

    const startInterval = () => {
        setStatus(true);
    }

    const resetInterval = () => {
        setCount(0)
    }

    useEffect(() => {
        // Increase the count
        if (status) {
            intervalId.current = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalId.current);
        }

        return () => {
            clearInterval(intervalId.current);
        }
    }, [status]);

    return (
        <div>
            <h3>Timer Exercise: Persisting values with useRef</h3>
            Time: {count} <br />
            <button onClick={() => startInterval()}>Start</button>
            <button onClick={() => stopInterval()}>Stop</button>
            <button onClick={() => resetInterval()}>Reset</button>
        </div>
    )
}

export default Timer