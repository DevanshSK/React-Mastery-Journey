import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const BasicForm = () => {

    // register: is used to connect input fields to the form.
    // handleSubmit: is a function to handle form validation.
    // errors: contains validation errors for the form.

    const {
        register,
        handleSubmit,
        reset,   // Reset form to initial state.
        formState: { errors, isSubmitting },
    } = useForm<FormData>();


    // Custom function to be run after validating the data.
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // Fake delay to similate API calls.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("FORM SUBMITTED");
        console.log(data);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>    
        {/* Attaching form validation to the onSubmit event handler of form. */}
            <h1>Basic React Hook Form Example</h1>

            {/* Attaching form fields to their inputs. */}
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    // Here we are attaching react-hook-form to inputs and provide validations.
                    {...register("name", { required: "Name is required" })} 
                    placeholder="Enter your name"
                />
                {/* Showing erros to the users. */}
                {errors.name && <p style={{ color: 'red' }} >{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    // Here we are validation emails using a regex pattern.
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            // Validates email using regex
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        } 
                    })} 
                    placeholder="Enter your email"
                />
                {errors.email && <p style={{ color: 'red' }} >{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    {...register("password", { 
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must contains at least 8 characters.",
                        }
                    })} 
                    placeholder="Enter your password"
                />
                {errors.password && <p style={{ color: 'red' }} >{errors.password.message}</p>}
            </div>

            {/* Submit and Reset the form */}
            <button disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting Data..." : "Submit Form"}</button>
            <button onClick={() => reset()} type="reset">Reset Form</button>

        </form>
    )
}

export default BasicForm