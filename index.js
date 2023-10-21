const express = require('express')
const routerCliente = require('./src/routes/cliente.js')
const routerAtendimento = require('./src/routes/atendimento.js')
const routerCachorro = require('./src/routes/cachorro.js')
const routerUsuario = require('./src/routes/usuario.js')
const routerAtendente = require('./src/routes/atendente.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(routerCliente)
app.use(routerAtendimento)
app.use(routerCachorro)
app.use(routerUsuario)
app.use(routerAtendente)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
