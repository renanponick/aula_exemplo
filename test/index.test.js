const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicio")
const conexao = require('../src/database')

describe('Testes pessoas', () => {

   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoExercicio()
   
   it('Should get person', async () => {
      const result = await servico.PegarUm(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste@teste.com');
      expect(result.senha).toBe('123456');
   })

   it('Should create a person', async () => {
      const result = await servico.Add({
         nome: 'joao',
         email: 'teste2@teste.com',
         senha: '123456'
      }, this.save)

      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste2@teste.com');
      expect(result.senha).toBe('123456');
   })

})