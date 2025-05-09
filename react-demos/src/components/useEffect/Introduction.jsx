import { useState, useEffect } from 'react'

const Introduction = () => {
    const [value, setValue] = useState(0);


    // No dependencies - Runs on every re-render.
    // useEffect(() => {
    //   console.log('Called UseEffect');
    //   document.title = `Increment ${value}`
    // });

    // Empty Dependency Array - Only runs on initial render once.
    // useEffect(() => {
    //   console.log('Called UseEffect');
    //   document.title = `Increment ${value}`
    // }, []);

    // Active dependencies in array - Only runs when dependencies change + iniaial render also.
    useEffect(() => {
      console.log('Called UseEffect');
      document.title = `Increment ${value}`
    }, [value]);

    return (
        <div>
            <h2>useEffect Introduction: {value}</h2>
            <button onClick={() => setValue(v => v + 1)}>Click Me</button>
        </div>
    )
}

export default Introduction