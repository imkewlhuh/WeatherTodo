import express from "express";
import morgan from "morgan";
import cors from "cors";
import taskRouter from "./routes/task.js";
import statusRouter from "./routes/status.js";

export default function createServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(morgan("tiny"));

    app.use("/status", statusRouter());
    app.use("/task", taskRouter());

    return app;
}