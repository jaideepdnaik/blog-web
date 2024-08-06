const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        console.log(tokenCookieValue);
        if (!tokenCookieValue) {
            return res.status(401).send({ message: "Unauthorized: No authentication cookie found." });
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
            next();
        } catch (error) {
            console.error(error);
        }
    };
}

module.exports = { checkForAuthenticationCookie };