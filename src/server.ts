import "reflect-metadata";
import "./database/connect";
import routes from "./routes";
import express from "express";
const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log("Server running port 3000...")
});