const Cliente = require('../models/cliente.js')
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.js');

class Repositorio {

    async PegarUm(id, transaction) {
        return Cliente.findOne({
            where: { id },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Cliente.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Cliente.findAll();
    }

    async Add(cliente, transaction) {
        const hashSenha = await bcrypt.hash(cliente.senha, 10)
        const { dataValues: createdUser } = await Usuario.create(
            {
                email: cliente.email,
                senha: hashSenha,
                permissao: 1
            },
            { transaction }
        )
    
        const { dataValues: createdCliente } = await Cliente.create(
            { ...cliente, usuarioId: createdUser.id },
            { transaction }
        )

        return { ...createdUser, ...createdCliente }
    }

    async Update(id, cliente) {
        const { dataValues: clienteOld } = await this.PegarUm(id)
        console.log('clienteOld', clienteOld)
        const hashSenha = await bcrypt.hash(cliente.senha, 10)

        await Usuario.update(
            {
                email: cliente.email,
                senha: hashSenha
            },
            { where: {
                id: clienteOld.usuarioId
            }}
        )
    
        await Cliente.update(cliente, {
            where: {
                id
            }
        })

        const client = await this.PegarUm(id)

        return client
    }

    async Delete(id) {
        const { dataValues: cliente } = await this.PegarUm(id)
        
        await Usuario.destroy({
            where: { id: cliente.usuarioId }
        });

        console.log('deletedo')
        return true
    }

}

module.exports = Repositorio