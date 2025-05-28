import { useState, useTransition } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Posts from "./Posts";

type ActiveTabType = "home" | "contact" | "posts";

const UseTransitionIntro = () => {
    const [activeTab, setActiveTab] = useState<ActiveTabType>("home");

    const [isPending, startTransition] = useTransition();

    const handleTabChange = (value: ActiveTabType) => {
        // Start the transition: State Update
        // startTransition(async () => {
        //     await new Promise(resolve => setTimeout(resolve, 1000));
        // })
        // startTransition(() => {
        //     setActiveTab(value);
        // })

        startTransition(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            startTransition(() => {
                setActiveTab(value);
            })
        })
    };

    const renderContent = () => {
        switch (activeTab) {
            case "home":
                return <Home />
            case "contact":
                return <Contact />
            case "posts":
                return <Posts />
            default:
                return <Home />;
        }
    }

    return (
        <div>
            <h1 className="text-lg font-semibold">useTransition in React 19</h1>
            <div className="tabs flex items-center flex-wrap gap-2 mt-3">
                <button
                    onClick={() => handleTabChange("home")}
                    className={`border px-4 py-1  outline-none ${activeTab === "home" ? "text-black bg-white" : "text-white bg-black"}`}
                >
                    Home
                </button>
                <button
                    onClick={() => handleTabChange("contact")}
                    className={`border px-4 py-1  outline-none ${activeTab === "contact" ? "text-black bg-white" : "text-white bg-black"}`}
                >
                    Contact
                </button>
                <button
                    onClick={() => handleTabChange("posts")}
                    className={`border px-4 py-1  outline-none ${activeTab === "posts" ? "text-black bg-white" : "text-white bg-black"}`}
                >
                    Posts
                </button>
            </div>
            <div className="content mt-3">
                {isPending ? (
                    <div>Loading...</div>
                ) : renderContent()}
            </div>
        </div>
    )
}

export default UseTransitionIntro