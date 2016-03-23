/* jshint node: true */

var express = require('express');
var leProxy = require('letsencrypt-express-proxy')('cb-server.eu');

var app = express();
app.use(leProxy);

var ghost = require('ghost');  

ghost({ config: __dirname + '/config.js' }).then(function(ghostServer) {  
  app.use(ghostServer.rootApp);
  ghostServer.start(app);
});

