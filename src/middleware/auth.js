const jwt = require('jsonwebtoken')
const config = require('../config')


function authMiddleware(permissao) {
    return (req, res, next) => {
        const token = req.headers['authorization']

        if(!token){
            return res.status(401).json({ message: 'Autorização Negada 123456' })
        }
    
        jwt.verify(token, config.secrect, (err, decoded) => {
            if(err) {
                return res.status(401).json({ message: 'Autorização Negada' })
            }
            
            if(permissao && !permissao.includes(decoded.permissao)){
                return res.status(401).json({ message: 'Autorização Negada - Sem permissao' })
            }
        
            console.log(decoded)
            req.session = decoded
    
            next()
        })
    }
}

module.exports = authMiddleware