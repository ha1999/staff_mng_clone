const jwt = require('jsonwebtoken')

const generatorToken = async (_id) => {
    try {
        return  jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 20),
            data: _id
        }, _id.toString());
    } catch (error) {
        return error
    }
}

const verifyToken = async (_id, token) => {
    try {
        return jwt.verify(token, _id.toString())
    } catch (error) {
        return error
    }
}

module.exports = {
    generatorToken,
    verifyToken
}