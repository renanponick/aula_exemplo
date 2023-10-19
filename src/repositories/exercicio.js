const Pessoa = require('../models/exercicio.js')
const bcrypt = require('bcrypt')

class RepositorieExercicio {

    async PegarUm(id, transaction) {
        return Pessoa.findOne({
            where: { id },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Pessoa.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Pessoa.findAll();
    }

    async Add(pessoa, transaction) {
        const hashSenha = await bcrypt.hash(pessoa.senha, 10)

        pessoa.senha = hashSenha
        const result = await Pessoa.create(
            pessoa,
            { transaction }
        )
    
        // const result = await Pessoa.create(
        //     { ...pessoa, senha: hashSenha },
        //     { transaction }
        // )


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