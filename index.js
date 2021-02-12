const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.get('/map', function (req, res) {
  //res.sendFile('/public/index.html', { root: __dirname });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`RHNJS app listening at http://localhost:${port}`);

  console.log("message");
  var m = process.env.MMS || 'm';
  console.log(m);


})