var
    express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 6664;

app.listen(port, function () {
  console.log('The app is running on port ' + port);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/libs', express.static(path.resolve(__dirname + '/../node_modules')));
app.use(express.static(path.resolve(__dirname + '/../public')));


//DB
const mongoose = require('mongoose');
const db = require('./db/config');

mongoose.connect(db.url);


//ROUTES

app.post('/createContract', function (req, res) {
  console.log('entry send');
  db.Contracts.create(req.body, function (err, contract) {
      if (err) {
        res.json({
          success: false,
          errors: err
        })
        return;
      }
      res.json({
        success: true
      })
    })
  });


app.get('/contracts', function (req, res) {
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
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/app.html'));
});
