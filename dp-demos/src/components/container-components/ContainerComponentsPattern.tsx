// import SingleTodoLoader from "./shared/SingleTodoLoader"
import axios from "axios";
import CommentsList from "./CommentsList"
import TodoList from "./TodoList"
import DataSource from "./shared/DataSource"

// import ResourceLoader from "./shared/ResourceLoader"

const getServerData = (url: string) => async () => {
    const response = await axios.get(url);
    return response.data;
};

const ContainerComponentsPattern = () => {
    return (
        <div>
            {/* Container Components in Action */}
            {/* <SingleTodoLoader>
                <TodoList />
            </SingleTodoLoader> */}

            {/* Refactor 1: Using id's with Container  */}
            {/* <SingleTodoLoader todoId="1">
                <TodoList />
            </SingleTodoLoader>
            <br />

            <SingleTodoLoader todoId="2">
                <TodoList />
            </SingleTodoLoader>
            <br />

            <SingleTodoLoader todoId="3">
                <TodoList />
            </SingleTodoLoader>
            <br /> */}

            {/* Refactor 2: Fetching multiple types of resources. */}
            {/* <div>
                <ResourceLoader resourceUrl="/todos/1" resourceName="todos">
                    <TodoList />
                </ResourceLoader>

                <hr />
                <br />

                <ResourceLoader resourceUrl="/comments/1" resourceName="comments">
                    <CommentsList />
                </ResourceLoader>
            </div> */}


            {/* Refactor 3: Custom data fetching function for container. */}
            <div>
                <DataSource
                    getDataFunc={getServerData(
                        "https://jsonplaceholder.typicode.com/todos/1"
                    )}
                    resourceName="todo"
                >
                    <TodoList />
                </DataSource>

                <br />

                <DataSource
                    getDataFunc={getServerData(
                        "https://jsonplaceholder.typicode.com/comments/1"
                    )}
                    resourceName="comments"
                >
                    <CommentsList />
                </DataSource>
            </div>
        </div>
    )
}

export default ContainerComponentsPattern