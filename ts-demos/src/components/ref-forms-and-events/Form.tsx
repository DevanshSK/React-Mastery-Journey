import { useRef, useState, type FormEvent } from "react";

type formData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const [submittedData, setSubmittedData] = useState<formData>({
        name: "",
        email: "",
        password: "",
    });

    const name = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Stop default form behaviour
        e.preventDefault();

        if (
            !name.current?.value.trim() ||
            !email.current?.value.trim() ||
            !password.current?.value.trim()
        ) {
            alert("Please enter all the fields");
            return;
        }

        const nameValue = name.current!.value;
        const emailValue = email.current!.value;
        const passwordValue = password.current!.value;

        setSubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Form</h2>
            <input type="text" placeholder="Enter your name" ref={name} />
            <input type="email" placeholder="Enter your email" ref={email} />
            <input type="password" placeholder="Enter your password" ref={password} />

            <button type="submit">Submit</button>


            <section>
                <h3>Name: {submittedData.name}</h3>
                <h3>Email: {submittedData.email}</h3>
                <h3>Password: {submittedData.password}</h3>
            </section>
        </form>
    )
}

export default Form