const { describe, expect, it } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicio")

describe('Testes do primeiro exercício', () => {
   
   const servico = new ServicoExercicio()

   it('Should sum two numbers', async () => {
      const result = await servico.PegarUm(1)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.email).toBe('joao@example.com');
      expect(result.senha).toBe('senha123');
   })

})