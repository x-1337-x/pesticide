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

function getOneContract(req, res) {
  db.Contracts.findById(req.params.id, function(err, contract) {
    if(err){
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

function deleteContract(req, res) {
  db.Contracts.findByIdAndRemove(req.params.id, function (err, contract) {

    console.log(contract);

    if(err){
      res.json({
        success: false,
        errors: err
      })
      return;
    }
      res.json({
        success: true,
        contract: contract //sends back the deleted db document
      })
  })
}

// function changeContract(req, res) {
//   var id = req.params.id;
//   db.Contracts.findByIdAndUpdate(id, req.body, {new: true}, function (err, updated) {
//     if(err){
//       res.json({
//         success: false,
//         errors: err
//       })
//       return;
//     }
//     res.json({
//       success: true,
//     })
//   })
// }

module.exports = {
  addContract: createContract,
  getAllContracts: getAllContracts,
  getContractById: getOneContract,
  //changeContract: changeContract,
  pullContract: deleteContract
}
