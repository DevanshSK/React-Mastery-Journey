import React, { createContext } from 'react'
import ComponentA from './ComponentA';

export const Data = createContext();
export const Data1 = createContext();

const ContextIntro = () => {
    const name = "Devansh";
    const age = 21;
    return (

        <div>
            <Data.Provider
                value={name}
            >
                <Data1.Provider
                    value={age}
                >

                    <h1>Context API Demo</h1>
                    <ComponentA />
                </Data1.Provider>
            </Data.Provider>
        </div>
    )
}

export default ContextIntro