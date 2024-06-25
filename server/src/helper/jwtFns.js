const {sign, verify} = require('jsonwebtoken')
const {nanoid} = require('nanoid')
const {JWT_SECRET} = require('../config/env')

const signJWT = async (payload, expiresIn = '365d') => {
    const {user_id, ...rest} = payload;
    //Todo: Check for user database whether user is there or not

    return sign(
        {user_id, ...rest, token_id: nanoid()},
        JWT_SECRET,
        {expiresIn}
    );
}

const verifyJWT = (token) => {
    new Promise((resolve) => {
        verify(
            token,
            JWT_SECRET,
            (err, decoded) => {
                if (err) {
                    const resp = {error: true, message: err.message};
                    return resolve(resp)
                }
                return resolve(decoded);
            }
        )
    })
}

module.exports = {
    signJWT,
    verifyJWT
}