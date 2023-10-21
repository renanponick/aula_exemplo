const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Usuario = require('./usuario.js')

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

Usuario.hasOne(Cliente)
Cliente.belongsTo(Usuario)

module.exports = Cliente