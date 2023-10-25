const express = require('express')
const Cliente = require('../controllers/cliente')
const authMiddleware = require('../middleware/auth')

const controller = new Cliente()
const router = express.Router()

router.get('/api/cliente/:id', authMiddleware([0, 1, 2]), controller.PegarUm)
router.get('/api/cliente/', authMiddleware([0, 1, 2]), controller.PegarTodos)
router.post('/api/cliente', authMiddleware([0, 1, 2]), controller.Add)
router.put('/api/cliente/:id', authMiddleware([0, 1, 2]), controller.Update)
router.delete('/api/cliente/:id', authMiddleware([0, 1, 2]), controller.Delete)

module.exports = router