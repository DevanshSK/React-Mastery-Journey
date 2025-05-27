import "./advancedStyles.css";
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLocation: string;
}

const AdvancedForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();


    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // Fake delay to similate API calls.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("FORM SUBMITTED");
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <h1>Registration Form</h1>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    {...register("firstName", { required: "First name is required" })} 
                    placeholder="Enter your first name"
                />
                {errors.firstName && <p style={{ color: 'red' }} >{errors.firstName.message}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    {...register("lastName", { required: "last name is required" })} 
                    placeholder="Enter your last name"
                />
                {errors.lastName && <p style={{ color: 'red' }} >{errors.lastName.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        } 
                    })} 
                    placeholder="Enter your email"
                />
                {errors.email && <p style={{ color: 'red' }} >{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    id="city" 
                    {...register("city", { required: "City is required" })} 
                    placeholder="Enter your City"
                />
                {errors.city && <p style={{ color: 'red' }} >{errors.city.message}</p>}
            </div>

            <div>
                <label htmlFor="state">State</label>
                <input 
                    type="text" 
                    id="state" 
                    {...register("state", { required: "State is required" })} 
                    placeholder="Enter your State"
                />
                {errors.state && <p style={{ color: 'red' }} >{errors.state.message}</p>}
            </div>

            <div>
                <label htmlFor="zip">Zip</label>
                <input 
                    type="text" 
                    id="zip" 
                    {...register("zip", { required: "Zip is required" })} 
                    placeholder="Enter your zip"
                />
                {errors.zip && <p style={{ color: 'red' }} >{errors.zip.message}</p>}
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <input 
                    type="text" 
                    id="country" 
                    {...register("country", { required: "Country is required" })} 
                    placeholder="Enter your country"
                />
                {errors.country && <p style={{ color: 'red' }} >{errors.country.message}</p>}
            </div>

            <div>
                <label htmlFor="completeLocation">Complete Location</label>
                <textarea  
                    rows={3}
                    id="completeLocation" 
                    {...register("completeLocation", { required: "Complete Location is required" })} 
                    placeholder="Enter your completeLocation"
                />
                {errors.completeLocation && <p style={{ color: 'red' }} >{errors.completeLocation.message}</p>}
            </div>

            {/* Submit and Reset the form */}
            <div
                style={{
                    display: 'flex',
                    gap: "10px", 
                }}
            >
            <button disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting Data..." : "Submit Form"}</button>
            <button onClick={() => reset()} type="reset">Reset Form</button>
            </div>

        </form>
    )
}

export default AdvancedForm