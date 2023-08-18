import express from 'express'
import { somar } from './exercicios/um.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exercicio', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
