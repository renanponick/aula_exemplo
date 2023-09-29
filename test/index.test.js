const { describe, expect, it } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicio")

describe('Testes do primeiro exercício', () => {
   
   const servico = new ServicoExercicio()

   it('Should sum two numbers', () => {
      const result = servico.Somar(1, 2)
      
      expect(result).toBe(3);
   })

   it('Should error', () => {
      const result = () => servico.Somar(1, "a")
      
      expect(result).toThrowError("Favor informar números");
   })

})