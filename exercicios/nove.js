/**
 * Descrever
 * @param {*} notas Passar isso
 * @param {*} nome Passar Aquilo
 * @returns Retornará isso
 */
function calcularMedia(notas, nome) {
    const media = (notas[0] + notas[1] + notas[2])/3

    let msg = 0
    if(media >= 7) {
        msg = 'Aprovado'
    } else if (media >= 5) {
        msg = 'Recuperação'
    } else {
        msg = 'Reprovado'
    }

    return {
        message: msg,
        media: media
    }
}

module.exports = { calcularMedia }