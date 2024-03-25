import { Router } from "express";
import { getUserWatchHistory, loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controller.js";
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


// Secure Routes 
userRouter.post("/logout", isUserLoggedIn, logoutUser);

userRouter.get("/profile", isUserLoggedIn, userProfile);

userRouter.get('/history', isUserLoggedIn, getUserWatchHistory);
export default userRouter;