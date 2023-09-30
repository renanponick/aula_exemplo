const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/pessoa/:id', controller.PegarUm)
router.get('/api/pessoa/', controller.PegarTodos)
router.post('/api/pessoa', controller.Add)
router.put('/api/pessoa/:id', controller.Update)
router.delete('/api/pessoa/:id', controller.Delete)

module.exports = router