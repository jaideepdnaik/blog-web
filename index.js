const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost:27017/blogify")
    .then(e => console.log("Connected to MongoDB"));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});