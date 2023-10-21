const Usuario = require('../models/usuario.js');

class Repositorio {

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }

}

module.exports = Repositorio