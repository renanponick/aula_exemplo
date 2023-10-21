const express = require('express')
const Atendente = require('../controllers/atendente')
const authMiddleware = require('../middleware/auth')

const controller = new Atendente()
const router = express.Router()

router.get('/api/atendente/:id', authMiddleware, controller.PegarUm)
router.get('/api/atendente/', authMiddleware, controller.PegarTodos)
router.post('/api/atendente', authMiddleware, controller.Add)
router.put('/api/atendente/:id', authMiddleware, controller.Update)
router.delete('/api/atendente/:id', authMiddleware, controller.Delete)

module.exports = router