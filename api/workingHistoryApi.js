const express = require('express')
const WorkingHistory = require('../models/WorkingHistory')
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        res.status(200).json( await WorkingHistory.addWH(req.body))
    } catch (err) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await WorkingHistory.getAll())
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await WorkingHistory.getById(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await WorkingHistory.delete(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.put('/', async (req, res, next) => {
    try {
        res.status(200).json(await WorkingHistory.updateById(req.body))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router