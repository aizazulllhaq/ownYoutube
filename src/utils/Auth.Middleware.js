import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import ApiError from './ApiError.js';

const isUserLoggedIn = async (req, res, next) => {
    const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) throw new ApiError(400, "Access Token Not Found , Please First Login");

    const validateAccessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!validateAccessToken) throw new ApiError(400, "Invalid Access Token");

    const user = await User.findById(validateAccessToken.id);

    if (!user) throw new ApiError(404, "User Not Found");

    req.user = user;

    next();
};

export default isUserLoggedIn;