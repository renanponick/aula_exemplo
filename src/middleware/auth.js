const jwt = require('jsonwebtoken')
const config = require('../config')

function authMiddleware(req, res, next) {
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({ message: 'Autorização Negada 123456' })
    }

    jwt.verify(token, config.secrect, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: 'Autorização Negada' })
        }
        console.log(decoded)
        req.session = decoded

        next()
    })
}

module.exports = authMiddleware