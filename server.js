var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server is running on process.env.PORT || 3000');
});
