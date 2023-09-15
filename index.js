const express = require('express')
const router = require('./src/routes/exercicio.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
