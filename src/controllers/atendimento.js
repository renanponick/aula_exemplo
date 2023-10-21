const Servico = require("../services/atendimento")

const servico = new Servico()

class Atendimento {

    async PegarUm(req, res){
        try {
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                atendimento: result
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
                atendimentos: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.atendimento)
            res.status(201).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.atendimento)
            res.status(200).json({
                atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.id)
            res.status(204).json()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
}

module.exports = Atendimento
