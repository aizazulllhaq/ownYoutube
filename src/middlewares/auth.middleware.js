import jwt from 'jsonwebtoken'
import ApiError from '../utils/ApiError';

export const isUserLoggedIn = (req, res, next) => {

    try {
        const accessToken = req.cookies?.accessToken || req.header("Authrization")?.replace("Bearer ", "");

        if (!accessToken) throw new ApiError(400, "First Login !! Access Token Not Found");

        const isUser = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        if (!isUser) throw new ApiError(400, "Invalid Access Token");

        req.user = isUser;

        next();
    } catch (err) {
        throw new ApiError(400, err.message);
    }
};
