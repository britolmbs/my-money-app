const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if (!token) {
            return res.status(403).send({ errors: ['No token Provided.'] })
        }
        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }

}