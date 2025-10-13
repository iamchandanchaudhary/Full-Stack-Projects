import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: Number,
    }
})

const User = mongoose.model("User", userSchema);

export default User;