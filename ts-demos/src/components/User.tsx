
// ## Way 1: Creating a type for the component props.

// type UserShape = {
//     name: string,
//     age: number,
//     isStudent: boolean,
// }


// ## Way 2: Creating an interface to define types for props.

// interface UserShape {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }


// ## Passing JSX content as props.
// interface UserShape {
//     children: React.ReactNode;
// }

// const User = ({ children }: UserShape) => {
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }

// export default User


// ## Another way to define components
interface UserShape {
    name: string;
    age: number;
    isStudent: boolean;
}

const User: React.FC<UserShape> = ({ name, age, isStudent }) => {
    return <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{isStudent ? "Student" : "Not Student"}</h1>
    </div>
}

export default User;