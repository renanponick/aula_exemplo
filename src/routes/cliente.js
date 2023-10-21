const express = require('express')
const Cliente = require('../controllers/cliente')
const authMiddleware = require('../middleware/auth')

const controller = new Cliente()
const router = express.Router()

router.get('/api/cliente/:id', authMiddleware, controller.PegarUm)
router.get('/api/cliente/', authMiddleware, controller.PegarTodos)
router.post('/api/cliente', authMiddleware, controller.Add)
router.put('/api/cliente/:id', authMiddleware, controller.Update)
router.delete('/api/cliente/:id', authMiddleware, controller.Delete)

module.exports = router