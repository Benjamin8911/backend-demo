const { MongoClient: MongoDB } = require('mongodb')

const client = new MongoDB('mongodb://localhost:27017')

let ret

ret = client.connect()
// create db test
const db = client.db('test')
// create collection fruits
const fruits = db.collection('fruits')
// insert one item
// ret = fruits.insertOne({
//   name: '芒果',
//   price: 20.1,
//   info: {
//     color: 'yellow',
//     size: 'big'
//   }
// })

// find
let fruit = fruits.findOne()
fruit.then(res => {
  console.log(res)
})

// update
fruits.updateOne({name: '芒果'}, {
  $set: {
    name: '苹果'
  }
})

// delete
fruits.deleteOne({name: '苹果'})

