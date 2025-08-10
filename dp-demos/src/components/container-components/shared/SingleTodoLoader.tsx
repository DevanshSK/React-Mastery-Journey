import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
    id: number;
    title: string;
    completed: string;
}

interface SingleTodoLoaderProps {
    children: React.ReactNode;
    todoId: string;
}

interface ChildComponentProps {
    todos: Todo | null;
}

const SingleTodoLoader = ({ children, todoId }: SingleTodoLoaderProps) => {
    const [todos, setTodos] = useState<Todo | null>(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            );
            console.log(response.data)
            setTodos(response.data);
        })();
    }, [todoId]);

    return (
        <>
            {/* Map over Child elements each at a time */}
            {React.Children.map(children, (child) => {
                // If child element is valid one, pass data by cloning the element.
                if (React.isValidElement<ChildComponentProps>(child)) {
                    return React.cloneElement(child, { todos });
                }
                // Else render the child.
                return child;
            })}
        </>
    )
}

export default SingleTodoLoader