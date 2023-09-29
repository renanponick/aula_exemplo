const ServicoExercicio = require("../services/exercicio")

const servico = new ServicoExercicio()

class ControllerExercicio {

    async PegarUm(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                nomes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    Add(req, res){
        try {
            const result = servico.Add(req.body.nome)
            res.status(201).json({
                nomes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerExercicio
