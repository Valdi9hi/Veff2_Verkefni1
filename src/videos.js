const express = require('express');

const videoRouter = express.Router()
const fs = require('fs');
const path = require('path');


//Load-a gögnunum asyncronously
//res.render('staðsetning á ejs-file', {JSON hlutur})
videoRouter.get('', async(req, res) => {
    res.render('videos', {
        categories : data.categories,
        videos : data.videos
    });
});

let rawdata = fs.readFileSync(path.resolve(__dirname, './videos.json'));
//Spurja Krissa
let data = JSON.parse(rawdata);
console.log(data);

module.exports = videoRouter; 