import { wrapAsync } from "../utils/wrapAsync.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import generateAccessTokenAndRefreshToken from "../utils/generateTokens.js";
import { Types } from "mongoose";

export const registerUser = wrapAsync(async (req, res) => {

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
    console.log("Avatar : ", avatarLocalPath, "cover : ", coverImageLocalPath)

    if (!avatarLocalPath) throw new ApiError(400, "Avatar file is required");
    if (!coverImageLocalPath) throw new ApiError(400, "Cover Image file is required");

    // upload them to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("avatar alst ", avatar)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

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
    if (!createdUser) throw new ApiError(500, "Something went wrong while registering user")

    // return response 
    return res.status(201).json(
        new ApiResponse(200, "User Registered Successfully", createdUser)
    )
})

export const loginUser = wrapAsync(async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) throw new ApiError(400, "Email & Password are required");

    const user = await User.findOne({ email });
    if (!user) throw new ApiError(404, "User Not Found");

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) throw new ApiError(400, "Invalid Credentials");

    const { accessToken, refreshToken } = generateAccessTokenAndRefreshToken(user);

    const cookieOptions = {
        httpOnly: true,
        secure: true
    }


    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(
            new ApiResponse(true, "Login Successfull", { accessToken, refreshToken })
        )
});


// Secure Controllers

export const updateUser = wrapAsync(async (req, res) => {
    // get fields from request body
    // check which fields given to change or when some not given then remain its old value in it
    // check if email is already given to be change , then do a complete process of emal verification
    // update user details & and get updated user details
    // return new updated user
});

export const logoutUser = wrapAsync(async (req, res) => {
    // clear user cookies ( accessToken ) only
    // return response with logout msg
});

export const userProfile = wrapAsync(async (req, res) => {

    const result = await User.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(req.user.id),
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers",
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "channelWhichUserSubscribed"
            }
        },
        {
            $addFields: {
                Subscribers: {
                    $size: "$subscribers",
                },
                ChannelWhichUserSubscribed: {
                    $size: "$channelWhichUserSubscribed"
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] },
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                username: 1,
                email: 1,
                is_verified: 1,
                Subscribers: 1,
                ChannelWhichUserSubscribed: 1,
                isSubscribed: 1
            }
        }
    ]);

    if (!result) throw new ApiError(400, "Query not work")

    return res
        .status(200)
        .json(
            new ApiResponse(true, "User Profile with Subscribers or Subscribed", result)
        )
});

export const getUserWatchHistory = wrapAsync(async (req, res) => {

    const result = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user.id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                // In there , we are under 'vides' collection , and  perform left join with user under videos 
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                // this 'project' will add fields in above 'owner' 
                                {
                                    $project: {
                                        fullName: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner" // get [0] from above owner
                            }
                        }
                    }
                ]
            }
        }
    ]);

    if (!result) throw new ApiError(404, "Query Not Work");

    return res
        .status(200)
        .json(
            new ApiResponse(true, "Watch History", result)
        )
});
