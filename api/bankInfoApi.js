const express = require('express')
const BankInfo = require('../models/BankInfo')
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        res.status(200).json( await BankInfo.addBankInfo(req.body))
    } catch (err) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await BankInfo.getAll())
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await BankInfo.getById(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await BankInfo.delete(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.put('/', async (req, res, next) => {
    try {
        res.status(200).json(await BankInfo.updateById(req.body))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router