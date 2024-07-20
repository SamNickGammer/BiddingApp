const {Unauthorized} = require("../helper/handleResponse");
const {verifyJWT} = require("../helper/jwtFns");

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return Unauthorized(res, 'Unauthorized User');
    }

    const token = authHeader.split(' ')[1];

    try {
        req.user = await verifyJWT(token); // You can add more user information if needed
        next();
    } catch (error) {
        return Unauthorized(res, error)
    }
};

module.exports = {authUser}