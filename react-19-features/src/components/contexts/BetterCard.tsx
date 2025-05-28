import { use } from "react";
import { ThemeContext } from "./Theme";

const BetterCard = () => {
    // Old way with useContext hook.
    // const context = useContext(ThemeContext);

    // New Way: Using the new React 19 use hook.
    const context = use(ThemeContext);
    
    
    // Extra validation to make sure that context is still inside ThemeProvider component.
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    const { theme, toggleTheme } = context;




    return (
        <div className={`w-[20rem] p-[2rem] mt-10 ${theme === "light" ? "bg-white" : "bg-teal-900"}`}>
            <h1 className={`text-teal-300 ${theme === "light" ? "text-black" : "text-white"}`}>
                Upgraded Theme Card
            </h1>

            <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
                This card utilizes the ThemeContext by using the latest React 19 hook named use.
            </p>

            <button
                className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
                onClick={toggleTheme}
            >
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </div>
    );
}

export default BetterCard