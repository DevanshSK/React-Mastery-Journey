import { useState } from 'react'
import "./style.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);



    return (
        <>
            <div className="container">
                <h1 className='number'>{count}</h1>
            </div>
            <section className="btns-container">
                <button
                    className='increment'
                    onClick={increment}
                >
                    +
                </button>
                <button
                    className='increment'
                    onClick={decrement}
                >
                    -
                </button>
            </section>
        </>
    )
}

export default Counter