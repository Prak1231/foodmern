const mongoose = require('mongoose')

mongoURL =
  'mongodb+srv://prakash:prak1234@cluster0.nbtkiwp.mongodb.net/mern-pizza?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

var db = mongoose.connection

db.on('connected', () => {
  console.log('MongoDb Connection Successfull')
})

db.on('error', () => {
  console.log('Mongodb connection failed')
})

module.exports = mongoose
