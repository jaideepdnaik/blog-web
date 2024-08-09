const JWT = require('jsonwebtoken');

const secretKey = "$uperMan@123";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secretKey);
    return token;
}

function validateToken(token) {
    if (!token) {
        throw new Error('Token is required');
    }
    try {
        const payload = JWT.verify(token, secretKey);
        return payload;
    } catch (error) {
        throw error;
    }
}

module.exports = { createTokenForUser, validateToken };