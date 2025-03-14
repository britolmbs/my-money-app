const billingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)



BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else{
            res.status(500).json({errors: [error]})
        }
    })
})

BillingCycle.route('count', (req, res, next) => {
    billingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    billingCycle.aggregate([{
        $projetc: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit", debt: {$sum: "$debt"}}}
    }, {
        $projetc: {_id: 0, credit: 1, debt: 1}
    }]) .exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle