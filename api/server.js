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

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/business', businessRoute);
    const port =  4000;

    const server = app.listen(port, function(){
     console.log('Listening on  ' + port);
    });

    
//     var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var morgan = require('morgan');

// var app = express();
// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/gtm');

// app.use(cors());
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// var cardRoutes = require('./routes/card.routes.js')(app);
// var columnRoutes = require('./routes/column.routes.js')(app);
// var boardRoutes = require('./routes/board.routes.js')(app);

// var server = app.listen(3001, function () {
//     console.log('Server running at http://127.0.0.1:3001/');
// });

// var io = require('socket.io').listen(server);