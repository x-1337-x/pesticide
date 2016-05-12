const db = require('../db/config');

console.log('Handler accessed');

function createContract(req, res) {
  db.Contracts.create(req.body, function(err, contract) {
      if (err) {
        res.json({
          success: false,
          errors: err
        })
        return;
      }
      res.json({
        success: true,
        contracts: contract
      })
    })
}

function getAllContracts(req, res) {
  db.Contracts.find({}, function(err, contracts){

  if (err) {
    res.json({
      success: false,
      errors: err
    })
    return;
  }

  res.json({
    success: true,
    contracts: contracts
  })
})
}

module.exports = {
  addContract: createContract,
  getAllContracts: getAllContracts
}
