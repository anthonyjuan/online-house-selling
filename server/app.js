let express = require('express'),
    mongoose = require('mongoose'),
    index = require('./routes'),
    bodyParser = require('body-parser'),
    app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',index);

mongoose.connect('mongodb://localhost/house')
mongoose.connection.on('connected', () => {
  console.log('monggo connected');
})
app.listen(3000, () => {
  console.log('server running');
})