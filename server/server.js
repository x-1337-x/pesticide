const
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


//***********DB***************
const mongoose = require('mongoose');
const db = require('./db/config');

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

mongoose.connect(db.url);


//************ROUTES****************

var apiRouter = express.Router();

var contractsAPI = require('./handlers/contractHandlers');

apiRouter.route('/contracts')
  .post(contractsAPI.addContract)
  .get(contractsAPI.getAllContracts);

apiRouter.route('/contracts/:id')
  .get(contractsAPI.getContractById)
  //.put(contractsAPI.changeContract)
  .delete(contractsAPI.pullContract);

app.use(apiRouter);


app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/app.html'));
});
