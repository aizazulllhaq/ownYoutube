import { connect } from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("MongoDB Connection Error ", err)
        process.exit(1);
    }
}

export default connectDB