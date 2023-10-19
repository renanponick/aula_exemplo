const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerExercicio()
const router = express.Router()

router.post('/api/login', controller.Login)
router.get('/api/pessoa/:id', authMiddleware, controller.PegarUm)
router.get('/api/pessoa/', authMiddleware, controller.PegarTodos)
router.post('/api/pessoa', authMiddleware, controller.Add)
router.put('/api/pessoa/:id', authMiddleware, controller.Update)
router.delete('/api/pessoa/:id', authMiddleware, controller.Delete)

module.exports = router