const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/nome/:id', controller.PegarUm)
router.post('/api/nome', controller.Add)

module.exports = router