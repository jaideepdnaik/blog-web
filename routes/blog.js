const { Router } = require("express");
const router = Router();

router.get("/add-new", (req, res) => {
    return res.render("addBlog.ejs", {
        user: req.user,
    });
});

module.exports = router;