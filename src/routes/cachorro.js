const express = require('express')
const Cachorro = require('../controllers/cachorro')
const authMiddleware = require('../middleware/auth')

const controller = new Cachorro()
const router = express.Router()

router.get('/api/cachorro/:id', authMiddleware, controller.PegarUm)
router.get('/api/cachorro/', authMiddleware, controller.PegarTodos)
router.post('/api/cachorro', authMiddleware, controller.Add)
router.put('/api/cachorro/:id', authMiddleware, controller.Update)
router.delete('/api/cachorro/:id', authMiddleware, controller.Delete)

module.exports = router