const express = require('express')
const Atendimento = require('../controllers/atendimento')
const authMiddleware = require('../middleware/auth')

const controller = new Atendimento()
const router = express.Router()

router.get('/api/atendimento/:id', authMiddleware, controller.PegarUm)
router.get('/api/atendimento/', authMiddleware, controller.PegarTodos)
router.post('/api/atendimento', authMiddleware, controller.Add)
router.put('/api/atendimento/:id', authMiddleware, controller.Update)
router.delete('/api/atendimento/:id', authMiddleware, controller.Delete)

module.exports = router