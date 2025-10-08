const express  = require("express");
const app = express();
const path =  require("path");

const mongoose = require("mongoose");
const methodOverride = require("method-override");

const dotenv = require("dotenv");
dotenv.config();

const Chat = require("./models/chat.js"); // ==> Chat model

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));  // Enabling the style sheet or any other file can join
app.use(express.urlencoded({ extended: true })); // make your 'url' encoded
app.use(methodOverride("_method"));

// App config
const port = process.env.PORT || 8001;

async function main() {
    // console.log("MONGODB_URI:", process.env.MONGODB_URI);
    await mongoose.connect(`${process.env.MONGODB_URI}/mypost`);
}

main()
    .then(() => console.log("DB Connection Successful"))
    .catch((error) => console.log(error));
    

app.listen(port, () => {
    console.log(`Application was listning on port ${port}`);
})

app.get("/", (req, res) => {
    // res.send("Working properly.");
    res.render("home.ejs");
})

// Chat.insertMany([
//     {from: "Sneha Chaudhary", to: "Neha Chaudhary", msg: "How are you?", created_at: new Date()},
//     {from: "Chandan Chaudhary", to: "Sheshmani Chaudhary", msg: "Call me", created_at: new Date()},
// ])
//     .then((data) => console.log(data));

// Chat.find({}).then((data) => console.log(data)).catch((err) => console.log(err));

// Index routes 
app.get("/chats", async(req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("Working");
    res.render("index.ejs", { chats });
});


// New Route page
app.get("/chats/new", (req, res) => {
    // res.send("Hello Chandan");
    res.render("newChat.ejs");
});

// Create route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;

    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    
    // console.log(newChat);
    newChat.save().then((data) => console.log("Chat was saved"))
                  .catch((err) => console.log(err));
    // res.send("working");

    res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);

    res.render("editChat.ejs", { chat });
});

// update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    let updatedMsg = await Chat.findByIdAndUpdate(id, 
        {msg: newMsg},
        { runValidators: true, new: true },
    );

    // console.log(updatedMsg);
    res.redirect("/chats");
})

// Destroy route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;

    let deletedChat = await Chat.findByIdAndDelete(id);
    // console.log(deletedChat);
    res.redirect("/chats");
})