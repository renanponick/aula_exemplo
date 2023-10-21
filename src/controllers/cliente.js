const Servico = require("../services/cliente")

const servico = new Servico()

class Controller {

    async PegarUm(req, res){
        try {
            console.log(req.session.permissao)
            if(req.session.permissao != 0 && req.session.permissao != 2){
                throw new Error("Sem permissão")
            }
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            if(req.session.permissao != 0 && req.session.permissao != 2){
                throw new Error("Sem permissão")
            }
            const result = await servico.PegarTodos()
            res.status(200).json({
                clientes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            if(req.session.permissao != 0 && req.session.permissao != 2){
                throw new Error("Sem permissão")
            }
            const result = await servico.Add(req.body.cliente)
            res.status(201).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            if(req.session.permissao != 0 && req.session.permissao != 2){
                throw new Error("Sem permissão")
            }
            const result = await servico.Update(req.params.id, req.body.cliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            if(req.session.permissao != 0 && req.session.permissao != 2){
                throw new Error("Sem permissão")
            }
            await servico.Delete(req.params.id)
            res.status(204).json()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = Controller
