const Repositorio = require("../repositories/cachorro");

const repositorio = new Repositorio()

class Servico {
    
    VerficarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada a cachorro para adicionar');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome da cachorro');
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

    async Add(cachorro, transaction) {
        this.VerficarCachorro(cachorro)

        return repositorio.Add(cachorro, transaction);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da cachorro para alterar');
        } 
        this.VerficarCachorro(cachorro)

        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = Servico