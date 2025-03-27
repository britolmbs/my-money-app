const BillingCycle = require('./billingCycle')
const errorHandler = require('../../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', errorHandler).after('put', errorHandler)



BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json({ errors: [err] })
    }
    })
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments((err, value) => {
      if (err) {
        res.status(500).json({ errors: [err] })
      } else {
        res.json({ value })
      }
    })
  })

  BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([
      {
        $project: {
          credit: { $sum: '$credits.value' },
          debt: { $sum: '$debts.value' }
        }
      },
      {
        $group: {
          _id: null,
          credit: { $sum: '$credit' },
          debt: { $sum: '$debt' }
        }
      },
      {
        $project: {
          _id: 0,
          credit: 1,
          debt: 1
        }
      }
    ]).exec((err, result) => {
      if (err) {
        res.status(500).json({ errors: [err] })
      } else {
        res.json(result[0] || { credit: 0, debt: 0 })
    }
  })
})

module.exports = billingCycleService