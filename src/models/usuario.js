const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Usuario = conexao.define('usuarios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        unique: true,
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Usuario