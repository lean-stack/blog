/* jshint node: true */

var express = require('express');
var app = express();

var ghost = require('ghost');  

ghost({ config: __dirname + '/config.js' }).then(function(ghostServer) {  
  app.use(ghostServer.rootApp);
  ghostServer.start(app);
});

