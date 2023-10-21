const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cliente = require('./cliente.js')

const Cachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})
Cliente.hasMany(Cachorro, { onDelete: 'CASCADE' })
Cachorro.belongsTo(Cliente)

module.exports = Cachorro