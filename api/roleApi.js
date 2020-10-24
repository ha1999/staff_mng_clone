const express = require('express')
const Role = require('../models/Role')
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        res.status(200).json( await Role.addRole(req.body))
    } catch (err) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Role.getAll())
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Role.getById(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Role.delete(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.put('/', async (req, res, next) => {
    try {
        res.status(200).json(await Role.updateById(req.body))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router