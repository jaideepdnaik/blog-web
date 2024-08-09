const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");

const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost:27017/blogify")
    .then(e => console.log("Connected to MongoDB"));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({}); 
    res.render("home", {
        user: req.user,
        blogs: allBlogs
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});