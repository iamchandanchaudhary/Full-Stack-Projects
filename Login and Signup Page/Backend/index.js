import express from "express";
const app = express();

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import userRoute from "./route/User.route.js";

const port = process.env.PORT || 8080;
const URI = process.env.MongoDB_URI;

async function main() {
    await mongoose.connect(URI);
}

main()
    .then(() => console.log("Connection Successful"))
    .catch((error) => console.log("ERROR-", error));

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})

app.get(("/"), (req, res) => {
    res.send("Login & Signup");
})