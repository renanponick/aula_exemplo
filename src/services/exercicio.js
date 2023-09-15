class ServicoExercicio {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 + num2
    
        return resultado;
    }
} 

module.exports = ServicoExercicio