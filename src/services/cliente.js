const Repositorio = require("../repositories/cliente");

const repositorio = new Repositorio()

class Servico {
    
    VerficarCliente(cliente) {
        if(!cliente){
            throw new Error('Não foi enviada a cliente para adicionar');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome da cliente');
        } else if(!cliente.email){
            throw new Error('Não foi enviado o email da cliente');
        } else if(!cliente.senha){
            throw new Error('Não foi enviado o senha da cliente');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cliente, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.Add(cliente, transaction);
    }

    async Update(id, cliente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da cliente para alterar');
        } 
        this.VerficarCliente(cliente)

        return repositorio.Update(id, cliente);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = Servico