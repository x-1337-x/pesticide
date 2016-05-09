var credentials = require('./dbCredentials');

var ContractModel = require('./models/contract');

module.exports = {
  url: `mongodb://${credentials.username}:${credentials.password}@ds017862.mlab.com:17862/pesticide`,
  Contracts : ContractModel
}
