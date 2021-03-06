const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  superskill: String,
  type: String,
  role: String
}, {
  timestamps: true
});

const Card = mongoose.model('Card', cardSchema)

module.exports = Card