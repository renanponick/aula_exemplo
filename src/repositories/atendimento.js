const Atendimento = require('../models/atendimento.js')
const bcrypt = require('bcrypt')

class Repositorio {

    async PegarUm(id, transaction) {
        return Atendimento.findOne({
            where: { id },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Atendimento.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Atendimento.findAll();
    }

    async Add(atendimento, transaction) {
        const result = await Atendimento.create(
            { ...atendimento, dia: new Date(atendimento.dia) },
            { transaction }
        )

        return result
    }

    async Update(id, atendimento) {
        const result = await Atendimento.update(
            { ...atendimento, dia: new Date(atendimento.dia) }, {
            where: {
                id
            }
        })

        return result
    }

    async Delete(id) {
        return Atendimento.destroy({
            where: { id }
        });
    }

}

module.exports = Repositorio