const Repositorio = require("../repositories/atendimento");

const repositorio = new Repositorio()

class Servico {
    
    VerficarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada a atendimento para adicionar');
        } else if(!atendimento.dia){
            throw new Error('Não foi enviado o nome da atendimento');
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

    async Add(atendimento, transaction) {
        this.VerficarAtendimento(atendimento)

        return repositorio.Add(atendimento, transaction);
    }

    async Update(id, atendimento) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da atendimento para alterar');
        } 
        this.VerficarAtendimento(atendimento)

        return repositorio.Update(id, atendimento);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = Servico