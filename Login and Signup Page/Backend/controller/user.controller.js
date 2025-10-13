import User from "../model/User.model.js";

export const getUser = async(req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }
    catch(error) {
        console.log("ERROR-", error);
        res.status(500).json(error);
    }
}