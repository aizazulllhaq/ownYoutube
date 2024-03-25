import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ApiResponse from "./utils/ApiResponse.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));


// routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.get("/", (req, res) => {
    // Send the response
    res.status(303).json(new ApiResponse(true, "Root Endpoint", {}));
})

app.use("/api/v1/users", userRouter);



export default app;