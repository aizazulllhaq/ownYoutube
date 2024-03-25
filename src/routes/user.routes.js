import { Router } from "express";
import { loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import isUserLoggedIn from "../utils/Auth.Middleware.js";


const userRouter = Router();



userRouter.route("/register")
    .post(upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        }
    ]), registerUser)

userRouter.post("/login", loginUser)

userRouter.post("/logout", isUserLoggedIn, logoutUser);

userRouter.get("/profile", userProfile);

export default userRouter;