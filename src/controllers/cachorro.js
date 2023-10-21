const Servico = require("../services/cachorro")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require("../config");

const servico = new Servico()

class Controller {

    async PegarUm(req, res){
        try {
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                cachorro: result
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
                cachorros: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.cachorro)
            res.status(201).json({
                cachorro: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.cachorro)
            res.status(200).json({
                cachorro: result
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

module.exports = Controller
