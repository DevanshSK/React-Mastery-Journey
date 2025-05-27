// Importing use from react
import { use } from "react"

// Define types for the return data.
interface Todo {
    title: string;
}

// Creating promise to fetch data from API.
const fetchData = async (): Promise<Todo> => {
    console.log("Fetch data called")
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await res.json();
}

// Create a promise object of the fetching function.
const fetchPromise = fetchData();


const BetterFetchTodo = () => {
    // Directly fetching the data using the `use` hook.
    // Do not call the fetchData() inside use hook as it calls that fn everytime the component rerenders.
    // Instead we can pass the promise object to that use hook.
    const data = use(fetchPromise);
    return (
        <h1>{data.title}</h1>
    )
}

export default BetterFetchTodo