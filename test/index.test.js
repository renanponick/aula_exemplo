const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicio")
const conexao = require('../src/database')

describe('Testes pessoas', () => {

   let save
   
   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoExercicio()
   
   it('Should get person', async () => {
      const result = await servico.PegarUm(1, this.save)

      expect(result.id).toBe(this.id);
      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste2@teste.com');
      expect(result.senha).toBe('123456');
   })

   it('Should create a person', async () => {
      const result = await servico.Add({
         nome: 'joao',
         email: 'teste2@teste.com',
         senha: '123456'
      }, this.save)

      this.id = result.id

      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste2@teste.com');
      expect(result.senha).toBe('123456');
   })

})