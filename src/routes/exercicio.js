const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio', controller.Somar)

module.exports = router