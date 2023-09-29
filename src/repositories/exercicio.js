const nomes = Array('Alice', 'Bob', 'Carlos');
const Pessoa = require('../models/exercicio.js')

class RepositorieExercicio {

    async PegarUm(id) {
        return Pessoa.findOne({
            where: { id }
        });
    }

    Add(nome) {
        nomes.push(nome); // adiciona no final do array

        // nomes.unshift(nome); // adiciona no incio do array

        return nome;
    }

    Delete(id) {
        nomes.slice(id, 1);

        return id;
    }



}

module.exports = RepositorieExercicio