let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let houseSchema = new Schema({
  title: String,
  description: String,
  address: String,
  price: Number,
  owner: String,
  image: String,
  loc: {
    lat: Number,
    lng: Number
  }
})

let House = mongoose.model('House',houseSchema);

module.exports = House;