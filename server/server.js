var
    express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 6664;

app.listen(port, function () {
  console.log('The app is running on port ' + port);
})

app.use(bodyParser.json());

app.use('/libs', express.static(path.resolve(__dirname + '/../node_modules')));
app.use('/public', express.static(path.resolve(__dirname + '/../public')));
