const mongoose = require('mongoose')
const Schema = mongoose.Schema
const connect = mongoose.connect('mongodb://localhost:27017/mall')
const ObjectId = Schema.ObjectId
const FruitsSchema = new Schema({
  name: {type: String, comment: '名称'},
  price: {type: Number, comment: '价格'},
  size: {type: String, comment: '大小'},
  from: {type: String, comment: '产地'}
})

module.exports = mongoose.model('fruits', FruitsSchema)