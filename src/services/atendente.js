const Repositorio = require("../repositories/atendente");

const repositorio = new Repositorio()

class Servico {
    
    VerficarAtendente(atendente) {
        if(!atendente){
            throw new Error('Não foi enviada a atendente para adicionar');
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

    async Add(atendente, transaction) {
        this.VerficarAtendente(atendente)

        return repositorio.Add(atendente, transaction);
    }

    async Update(id, atendente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da atendente para alterar');
        } 
        this.VerficarAtendente(atendente)

        return repositorio.Update(id, atendente);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = Servico