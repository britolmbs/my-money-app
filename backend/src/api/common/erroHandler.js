const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle
    
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

// Corrija a declaração da arrow function
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}
