const Usuario = require('../models/usuario.js')
const bcrypt = require('bcrypt')

class Repositorio {

    async PegarUm(id, transaction) {
        return Usuario.findOne({
            where: { id },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email, permissao: 2 }
        });
    }
    
    async PegarTodos() {
        return Usuario.findAll();
    }

    async Add(atendente, transaction) {
        const hashSenha = await bcrypt.hash(atendente.senha, 10)

        const result = await Usuario.create(
            { ...atendente, senha: hashSenha, permissao: 2 },
            { transaction }
        )

        return result
    }

    async Update(id, atendente) {
        const result = await Usuario.update(atendente, {
            where: {
                id, permissao: 2
            }
        })

        return result
    }

    async Delete(id) {
        return Usuario.destroy({
            where: { id, permissao: 2 }
        });
    }

}

module.exports = Repositorio