import React, { useRef } from 'react'

const FocusInput = () => {
    const inputEL = useRef(null);

    const handleFocus = () => {
        inputEL.current.focus();
    }

    return (
        <div>
            <h3>Focus Input Exercise</h3>
            <input ref={inputEL} type="text" placeholder='Enter your address' />
            <button onClick={handleFocus}>Click to focus</button>
        </div>
    )
}

export default FocusInput