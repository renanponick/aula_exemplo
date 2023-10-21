const Repositorio = require("../repositories/usuario");

const repositorio = new Repositorio()

class Servico {
    
    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }

} 

module.exports = Servico