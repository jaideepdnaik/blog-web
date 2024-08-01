const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});