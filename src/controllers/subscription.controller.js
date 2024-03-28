import Subscription from "../models/Subscription.Model";
import { User } from "../models/user.model";
import ApiError from "../utils/ApiError";
import { wrapAsync } from "../utils/wrapAsync";


export const channelSubscription = wrapAsync(async (req, res) => {

    const user = await User.findById(req.user?.id);

    if (!user) throw new ApiError(404, "User Not Found");

    const subscription = new Subscription({
        subscriber:user.id,
        channel:6,
    })

});