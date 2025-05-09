import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("Component Mounted");
    }, [])
    return (
        <div>
            <h1>Basic Effect Exercise for useEffect</h1>
        </div>
    )
}

export default BasicEffect