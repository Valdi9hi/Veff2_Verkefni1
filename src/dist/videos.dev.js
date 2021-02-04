"use strict";

var express = require('express');

var videoRouter = express.Router();

var fs = require('fs');

var path = require('path'); //Load-a gögnunum asyncronously
//res.render('staðsetning á ejs-file', {JSON hlutur})


videoRouter.get('', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('videos', {
            categories: data.categories,
            videos: data.videos
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
var rawdata = fs.readFileSync(path.resolve(__dirname, './videos.json')); //Spurja Krissa

var data = JSON.parse(rawdata);
console.log(data);
module.exports = videoRouter;