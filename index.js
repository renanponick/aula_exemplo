import express from 'express'

const app = express()
const port = 3000

app.get('/api/', (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    res.json({
        message: `resultado: ${num1 + num2}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})