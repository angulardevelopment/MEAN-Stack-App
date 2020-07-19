const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    const businessRoute = require('./routes/business.route');
    
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
// var morgan = require('morgan');

    const app = express();
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({
//     extended: true
// }));
    app.use(cors());
// app.use(morgan('dev'));

    app.use('/business', businessRoute);
    const port =  4000;

    const server = app.listen(port, function(){
     console.log('Listening on  ' + port);
    });
