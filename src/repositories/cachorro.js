const Cachorro = require('../models/cachorro.js')
const bcrypt = require('bcrypt')

class Repositorio {

    async PegarUm(id, transaction) {
        return Cachorro.findOne({
            where: { id },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Cachorro.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Cachorro.findAll();
    }

    async Add(cachorro, transaction) {
        const result = await Cachorro.create(
            cachorro,
            { transaction }
        )

        return result
    }

    async Update(id, cachorro) {
        const result = await Cachorro.update(cachorro, {
            where: {
                id
            }
        })

        return result
    }

    async Delete(id) {
        return Cachorro.destroy({
            where: { id }
        });
    }

}

module.exports = Repositorio