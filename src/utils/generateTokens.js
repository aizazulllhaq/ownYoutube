import jwt from 'jsonwebtoken'

const generateAccessTokenAndRefreshToken = (user) => {
    const accessTokenPayload = {
        id: user._id,
        email: user.email,
        role: user.role,
        is_verified: user.is_verified
    }

    const accessToken = jwt.sign(accessTokenPayload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });

    const refreshTokenPayload = {
        id: user._id,
    };

    const refreshToken = jwt.sign(refreshTokenPayload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });

    return { accessToken, refreshToken }
}

export default generateAccessTokenAndRefreshToken;