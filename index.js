var express = require('express');
const fs = require('fs');
const http = require('http');


const fileOptions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};


var app = express();


app.use(express.static(__dirname + '/dist'));


var httpServer = http.createServer(app);

httpServer.listen(80);
