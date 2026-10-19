//Extenal Package
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "node:path";

//Middlewares
import {
  errorLoggingMiddleWare,
  errorResponseHandler,
  RouteNotFoundHandler,
} from "./utils/middleware/error";

//Routes
import AuthRouter from "./auth/auth.route";
//import { AuthorizationClientRequest } from "./utils/middleware/auth";

dotenv.config({
  path: path.resolve("apps/api/.env.local"),
});

const app = express();
const PORT = 8080;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

//Auth
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Welcome to ESMs API!");
});

// 404 handler
app.use(RouteNotFoundHandler);

// Global error handler - must be last middleware
app.use(errorResponseHandler);

//Log SomeEles
app.use(errorLoggingMiddleWare);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
