const { Sequelize } = require('sequelize')
const { development } = require('./config')

const sequelize = new Sequelize(development)
sequelize.sync()
    .then(() => {
        console.log('Conectado ao banco com sucesso!')
    })
    .catch((error) => {
        console.log('Não conectou ao banco de dados', error)
    })


module.exports = sequelize