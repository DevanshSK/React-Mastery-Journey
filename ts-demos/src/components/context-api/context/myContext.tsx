import { createContext, useState, type FC } from "react";

// Defining types for Context
interface MyContextProps{
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Creating Context
export const MyContext = createContext<MyContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

interface MyProviderProps{
    children: React.ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({children}) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(c => c+1);
    const decrement = () => setCount(c => c-1);

    return <MyContext.Provider value={{ count, increment, decrement }} >{children}</MyContext.Provider>
}

export default MyProvider;