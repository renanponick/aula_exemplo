const Servico = require("../services/usuario")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require("../config");

const servico = new Servico()

class Controller {

    async Login(req, res) {
        const { email, senha } = req.body;

        if(!email || !senha){
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const { dataValues: usuario } = await servico.PegarUmPorEmail(email)

        if(!usuario) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }
        if(!(await bcrypt.compare(senha, usuario.senha))){
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, nome: usuario.nome, permissao: usuario.permissao },
            config.secrect
        )

        res.json({ token })
    }

}

module.exports = Controller
