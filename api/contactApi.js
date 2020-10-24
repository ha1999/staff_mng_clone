const express = require('express')
const Contact = require('../models/Contact')
const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        res.status(200).json( await Contact.addContact(req.body))
    } catch (err) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Contact.getAll())
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Contact.getById(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await Contact.delete(req.params))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

router.put('/', async (req, res, next) => {
    try {
        res.status(200).json(await Contact.updateById(req.body))
    } catch (error) {
        res.status(500).json({ error: err.message || err.toString() })
    }
})

module.exports = router