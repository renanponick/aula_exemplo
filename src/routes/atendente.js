const express = require('express')
const Atendente = require('../controllers/atendente')
const authMiddleware = require('../middleware/auth')

const controller = new Atendente()
const router = express.Router()

router.get('/api/atendente/:id', authMiddleware([0, 2]), controller.PegarUm)
router.get('/api/atendente/', authMiddleware([0, 2]), controller.PegarTodos)
router.post('/api/atendente', authMiddleware([0]), controller.Add)
router.put('/api/atendente/:id', authMiddleware([0, 2]), controller.Update)
router.delete('/api/atendente/:id', authMiddleware([0, 2]), controller.Delete)

module.exports = router