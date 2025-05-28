import { createContext, useState, type ReactNode, useContext } from "react";
import Card from "./Card";
import BetterCard from "./BetterCard";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});


const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Theme component to wrap provider and has a card.
const Theme = () => {
    return (
        <ThemeProvider>
            <Card />
            <BetterCard />
        </ThemeProvider>
    )
}

// Custom hook for getting theme values directly.
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}

export default Theme;