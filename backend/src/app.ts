import "dotenv/config";
import express from "express";
import { noteRouter } from "./routes";
import morgan from "morgan";
import { errorHandler, unknownRoute } from "./middleware";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/notes", noteRouter);

app.use(unknownRoute);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(errorHandler);

export default app;
