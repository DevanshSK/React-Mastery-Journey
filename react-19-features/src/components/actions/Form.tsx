
const Form = () => {
    
    const formAction = (formData: FormData) => {
        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        }

        console.log(userData);

        console.log(formData.has("name"))
        console.log(formData.has("test"))
    }

    return (
        <form 
            action={formAction}
        >
            <div className="flex gap-2 mt-2 items-center">
                <label htmlFor="name">Name: </label>
                <input className="border-2 border-black rounded px-2 py-1" type="text" id="name" name="name" placeholder="Enter your name" />
            </div>

            <div className="flex gap-2 mt-2 items-center">
                <label htmlFor="email">Email: </label>
                <input className="border-2 border-black rounded px-2 py-1" type="email" id="email" name="email" placeholder="Enter your email" />
            </div>

            <div className="flex gap-2 mt-2 items-center">
                <label htmlFor="password">Password: </label>
                <input className="border-2 border-black rounded px-2 py-1" type="password" id="password" name="password" placeholder="Enter your password" />
            </div>

            <div className="flex items-center gap-2">
                <button type="submit" className="bg-black border-black border-2 text-white px-4 py-2 mt-3">Submit</button>
                <button type="reset" className="bg-white border-black border-2 text-black px-4 py-2 mt-3">Reset</button>
            </div>
        </form>
    )
}

export default Form