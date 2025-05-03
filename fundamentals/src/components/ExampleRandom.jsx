import { useState } from "react";

const ExampleRandom = () => {
    const [randomNumber] = useState(() => (
        Math.floor(Math.random() * 100)
    ));
    return (
        <div>
            Random Number
            {randomNumber}
        </div>
    )
};
export default ExampleRandom;