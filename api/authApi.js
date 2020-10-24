const express = require('express')
const User = require('../models/User')
const {generatorToken} = require('../service/serviceToken')
const router = express.Router()

router.post('/login', async (req, res, next) => {
    try {
        const user = await User.getAuth(req.body)
        res.status(200).json(await generatorToken(user._id))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router