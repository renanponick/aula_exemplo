const RepositorieExercicio = require("../repositories/exercicio");

const repositorio = new RepositorieExercicio()

class ServicoExercicio {
    
    async PegarUm(id) {
        return repositorio.PegarUm(id);
    }

    Add(nome) {
        return repositorio.Add(nome);
    }

} 

module.exports = ServicoExercicio