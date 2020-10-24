const express = require('express')
const Family = require('../models/Family')
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        res.status(200).json( await Family.addFamily(req.body))
    } catch (err) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Family.getAll())
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Family.getById(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Family.delete(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.put('/', async (req, res, next) => {
    try {
        res.status(200).json(await Family.updateById(req.body))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router