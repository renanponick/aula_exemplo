const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorro.js')

const Atendimento = conexao.define('atendimentos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    dia: {
        type: DataTypes.DATE,
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cachorroId: {
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cachorro,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})
Cachorro.hasMany(Atendimento, { onDelete: 'CASCADE' })
Atendimento.belongsTo(Cachorro)

module.exports = Atendimento