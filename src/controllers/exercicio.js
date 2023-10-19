const ServicoExercicio = require("../services/exercicio")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require("../config");

const servico = new ServicoExercicio()

class ControllerExercicio {

    async Login(req, res) {
        // const email = req.body.email;
        // const senha = req.body.senha;
        const { email, senha } = req.body;

        if(!email || !senha){
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const { dataValues: pessoa } = await servico.PegarUmPorEmail(email)

        if(!pessoa) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        if(!(await bcrypt.compare(senha, pessoa.senha))){
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const token = jwt.sign(
            { id: pessoa.id, email: pessoa.email, nome: pessoa.nome },
            config.secrect
        )

        res.json({ token })
    }

    async PegarUm(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                pessoa: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            const result = await servico.PegarTodos()
            res.status(200).json({
                pessoas: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.pessoa)
            res.status(201).json({
                pessoa: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.pessoa)
            res.status(200).json({
                pessoa: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.id)
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerExercicio
