import { useActionState } from "react";

async function increment(previousState, formData: FormData) {
    console.log(formData.get("name"));
    return previousState + 1;
}

const Count = () => {
    const [state, formAction] = useActionState(increment, 0);

    return (
        <form>
            <h2 className="text-3xl">{state}</h2>
            <button 
                className="bg-teal-300 p-3"
                formAction={formAction}
            >
                Increment
            </button>
            <br />
            <input 
                type="text" 
                placeholder="Enter your name" 
                className="border-2" 
                name="name"
            />
        </form>
    )
}

export default Count