const { describe, expect, it } = require('@jest/globals')
const { sub } = require('../exercicios/dois.js')

describe('Testes do primeiro exercício', () => {
   beforeAll(async () => {
      console.info('Iniciando TDD com jest!');
   });

   afterAll(() => {
      console.info('Encerrados os testes');
   });

   it('Should sum two numbers', () => {
      const result = sub(1, 2)
      
      expect(result).toBe(3);
   })

})