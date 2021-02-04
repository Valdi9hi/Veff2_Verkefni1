const express = require('express');

const app = express();
const host = "127.0.0.1";
const port = 3000;

//Static files
app.use(express.static('public')); 
app.use('/styles',express.static(__dirname + 'public/styles'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/videos',express.static(__dirname + 'public/img'));

//Templating Engine
app.set('views','./src/views');
app.set('view engine', 'ejs');

// Routes
const videoRouter = require('./src/videos');
app.use('/', videoRouter);

//Hlusta á port 3000;
app.listen(port , host, () => {
    console.log(
        `Server @ https://${host}:${port}/`,
        );
});


//Aðstoðarföll
app.locals.videoAge = (seconds) => {
    const age = (Date.now() - seconds) / 1000;
    if (age > 365 * 24 * 60 * 60) {
      return (`fyrir ${Math.floor(age / (365 * 24 * 60 * 60))} árum síðan`);
    }
    if (age >= 30 * 24 * 60 * 60) {
      return (`fyrir ${Math.floor(age / (30 * 24 * 60 * 60))} mánuðum síðan`);
    }
    if (age >= 7 * 24 * 60 * 60) {
      return (`fyrir ${Math.floor(age / (7 * 24 * 60 * 60))} vikum síðan`);
    }
    if (age >= 24 * 60 * 60) {
      return (`fyrir ${Math.floor(age / (24 * 60 * 60))} dögum síðan`);
    }
    if (age >= 60 * 60) {
      return (`fyrir ${Math.floor(age / (60 * 60))} klukkutímum síðan`);
    }
    if (age >= 60) {
      return (`fyrir ${Math.floor(age / 60)} mínútum síðan`);
    }
  
    return `fyrir ${age} sekúndum síðan`;
  }

app.locals.videoLength = (time) => {
    const hours = Math.floor(time / 3600) > 0 ? `${Math.floor(time / 3600)}:` : '';
    let minutes;
    if (Math.floor((time % 3600) / 60) > 0 && Math.floor((time % 3600) / 60) < 10) {
      minutes = `${Math.floor((time % 3600) / 60)}:`;
    } else if (Math.floor((time % 3600) / 60) > 0) {
      minutes = `0${Math.floor((time % 3600) / 60)}:`;
    } else {
      minutes = '00:';
    }
    const seconds = time % 60 > 10 ? time % 60 : `0${time % 60}`;
    return (hours + minutes + seconds);
  }

//Villumeðhöndlun
//function notFoundHandler(req, res, next){
//const title = "Fannst ekki";
//const message = "Obb, þú ert í svolitlum bobba!";
//    res.status( 04).render('error',{title, message});
//}
//
//function errorHandler(err, req, res, next){
//    console.log(err);
//    const title = "Fannst ekki";
//    const message = "Arg";
//    res.status(500).render("error", {title, message});
//}
//
//app.use(notFoundHandler);
//app.use(errorHandler);
