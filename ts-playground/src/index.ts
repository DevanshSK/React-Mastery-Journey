import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.get("/", (request: Request, response: Response) => {
    response.send("Hello, Typescript with Express!");
});

app.listen(port, () => {
    console.log(`Server running on the port: ${port}`);
});