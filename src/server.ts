import "reflect-metadata";
import "./database/connect";
import routes from "./routes";
import express from "express";
const app = express();
const cors = require("cors");

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    app.use(cors());
    next();
})
app.use(routes)

app.listen(3000, () => {
    console.log("Server running port 3000...")
});