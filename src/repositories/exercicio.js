const Pessoa = require('../models/exercicio.js')

class RepositorieExercicio {

    async PegarUm(id, transaction) {
        return Pessoa.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Pessoa.findAll();
    }

    async Add(pessoa, transaction) {
        const result = await Pessoa.create(pessoa, { transaction })

        return result
    }

    async Update(id, pessoa) {
        const result = await Pessoa.update(pessoa, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Pessoa.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieExercicio