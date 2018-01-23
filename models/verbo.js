// {
//   "id": 3,
//   "spanish": "aceptar",
//   "english": "to accept",
//   "reflexive": false,
//   "grupo": 0
// }
var mongoose = require('mongoose');

var verboSchema = new mongoose.Schema({
  spanish: {
    type: String,
    required: "spanish word"
  },
  english: {
    type: String,
    required: "english translation"
  },
  reflexive: {
    type: Boolean,
    default: false
  },
  grupo: {
    type: Number,
    min: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

var Verbo = mongoose.model('Verbo', verboSchema);

module.exports = Verbo;