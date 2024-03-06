import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";


const registerUser = wrapAsync(async (req, res) => {

    // get user detail from frontend
    const { username, email, password } = req.body;

    // validation - not empty 
    if (
        [username, email, password].some(((field) => field?.trim() == ""))
    ) {
        throw new ApiError(400, "All Fields are required")
    }

    // check if user already exists : username , email
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existedUser) throw new ApiError(409, "User already Exists");

    // check for images , check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) throw new ApiError(400, "Avatar file is required");

    // upload them to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) throw new ApiError(400, "Avatar file is required");

    // create user object - create entry in db
    const user = await User.create({
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
    });

    // remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    // check for user creation 
    if (!createdUser) throw new ApiError(500, "Something went wrong while registering the User")

    // return response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfully")
    )
})







export { registerUser }