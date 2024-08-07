const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        console.log(tokenCookieValue);
        if (!tokenCookieValue) {
            next();
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            console.error(error);
        }
        next();
    };
}

module.exports = { checkForAuthenticationCookie };