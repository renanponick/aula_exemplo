const Servico = require("../services/atendente")

const servico = new Servico()

class Atendente {

    async PegarUm(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                atendente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.PegarTodos()
            res.status(200).json({
                atendentes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.Add(req.body.atendente)
            res.status(201).json({
                atendente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.Update(req.params.id, req.body.atendente)
            res.status(200).json({
                atendente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            if(req.session.permissao != 0){
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

module.exports = Atendente
