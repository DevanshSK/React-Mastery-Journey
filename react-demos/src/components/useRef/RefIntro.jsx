import React, { useRef } from 'react'
import FocusInput from './FocusInput';
import Timer from './Timer';

const RefIntro = () => {
    // const ref = useRef(null);
    // outputs null in current value.
    // console.log(ref);

    // Example of useRef: Performs DOM manipulations in React.
    const inputElement = useRef(null);

    console.log(inputElement);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "John Fernandes";
    }

    return (
        <div>
            <h1>useRef hook example</h1>
            <input type="text" placeholder='Enter your name' ref={inputElement} />
            <button onClick={() => focusInput()}>Click to focus</button>

            <FocusInput />
            <Timer />
        </div>
    )
}

export default RefIntro