import { useFormStatus } from "react-dom"

const FormButton = () => {
    const { pending, data } = useFormStatus();



    return (
        <div>
            <div className="flex items-center gap-2">
                <button 
                    disabled={pending}  // Using pending form state in UI
                    type="submit" 
                    className="bg-black border-black border-2 text-white px-4 py-2 mt-3"
                >
                    {/* Using submitted data in the UI */}
                    {pending ? `Submitting ${data?.has("name") ? data.get("name") + "'s" : ""} Post...` : "Submit"}
                </button>
                <button type="reset" className="bg-white border-black border-2 text-black px-4 py-2 mt-3">Reset</button>
            </div>

        </div>
    )
}

export default FormButton