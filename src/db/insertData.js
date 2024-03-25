import connectDB from ".";
import { User } from "../models/user.model";

connectDB();

const insertUsersDataForTesting = async () => {
    const result = await User.insertMany([
        {
            username: "Ihtisham",
            email: "ihtisham@gmail.com",
            avatar: "http://res.cloudinary.com/dtx4wmfgz/image/upload/v1711359571/yvn8ggo0uqrcxyu1plve.jpg",
            coverImage: "http://res.cloudinary.com/dtx4wmfgz/image/upload/v1711359572/gl5dc4moo9afqimpfjef.jpg",
            password: "superSecretPassword",
            watchHistory: [

            ]

        }
    ])
}

// insertUsersDataForTesting();

const insertVideoDataForTesting = async () => {

}

// insertVideoDataForTesting();

const insertLikeDataForTesting = async () => {

}

// insertLikeDataForTesting();


const insertTweetDataForTesting = async () => {

}

// insertTweetDataForTesting();

const insertCommentDataForTesting = async () => {

}

// insertCommentDataForTesting();

const insertPlaylistDataForTesting = async () => {

}

// insertPlaylistDataForTesting();