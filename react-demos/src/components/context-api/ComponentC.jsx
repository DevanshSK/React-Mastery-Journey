import { useContext } from 'react'
import { Data, Data1 } from './ContextIntro'


const ComponentC = () => {

    // Getting data from context using useContext hook
    const userName = useContext(Data);
    const userAge = useContext(Data1);

    return (
        <h1>My name is {userName} and I am {userAge} years old.</h1>
    )

    // Getting data from the context directly
    // return (
    //     <Data.Consumer>
    //         {(name) => {
    //             return (
    //                 <Data1.Consumer>
    //                     {(age) => (
    //                         <div>
    //                             <h1>Name: {name}</h1>
    //                             <p>Age: {age}</p>
    //                         </div>
    //                     )}
    //                 </Data1.Consumer>
    //             )
    //         }}
    //     </Data.Consumer>
    // )


}

export default ComponentC