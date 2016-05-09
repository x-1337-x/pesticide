var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statuses = [
  'AVAILABLE',
  'TAKEN',
  'CLOSED'
]

var types = [
  'ELIMINATE',
  'SEARCH & DESTROY',
  'PUNISH',
  'EXTRACT & DELIVER',
  'BABYSIT'
]

var contractSchema = new Schema({
  target: {
    name: {
      type: String,
      require: true

    },
    targetPortfolioUrl: {
      type: String,
      require: true
    },
  },

  date_added: {
    type: Date,
    default: Date.now
  },

  due_date: {
    type: Date
  },

  status: {
    type: String,
    enum: statuses,
    default: statuses[0],
    require: true
  },

  job_type: {
    type: String,
    enum: types,
    default: types[0],
    require: true
  },

  reward: {
    type: String,
    require: true
  }
},
{collection: 'Contracts'});

module.exports = mongoose.model('Contracts', contractSchema);
