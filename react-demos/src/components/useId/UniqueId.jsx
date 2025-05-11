import React, { useId } from 'react'

const UniqueId = () => {
    const id = useId();

    console.log(id);

    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}-email`} name='email' />

            <br />

            <label htmlFor={`${id}-password`}>Password</label>
            <input type="password" id={`${id}-password`} name='password' />
        </div>
    )
}

export default UniqueId