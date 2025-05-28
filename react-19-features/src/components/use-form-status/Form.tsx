import FormButton from "./FormButton"

const Form = () => {
    const myAction = async (formData: FormData) => {
        // Simulate an API call with a delay of 2 sec.
        await new Promise(resolve => setTimeout(resolve, 2000));

        const newPost = {
            name: formData.get("name"),
            post: formData.get("email"),
        }

        console.log("Post submitted.")
        console.table(newPost)
    }

    return (
        <form 
            action={myAction}
        >

            <div className="flex gap-2 mt-2 items-center">
                <label htmlFor="name">Name: </label>
                <input 
                    className="border-2 border-black rounded px-2 py-1" 
                    type="text" id="name" name="name" placeholder="Enter your name" required 
                />
            </div>

            <div className="flex gap-2 mt-2 items-center">
                <label htmlFor="email">Email: </label>
                <input 
                    className="border-2 border-black rounded px-2 py-1" 
                    type="email" id="email" name="email" placeholder="Enter your email" required 
                />
            </div>

            <FormButton />
        </form>
    )
}

export default Form