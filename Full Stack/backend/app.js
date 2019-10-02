const express = require('express');
const mongoose = require('mongoose');
const mobileRoutes = require('./routes/mobile');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

mongoose.connect('mongodb://localhost:27017/stuff')
    .then(() => {
        console.log('MongoDb connected');
    })
    .catch((error) => {
        console.log('Cant connect to mongo');
        console.log(error);
    });

///
const app = express();

app.use(cors());


const bodyParser = require('body-parser');

app.get('/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get('/docs', function(req, res, next) {
    var data =fs.readFileSync('routes\swagger.yaml');
    res.contentType("routes\swagger.yaml");
    res.send(data);
})

app.use(bodyParser.json());

app.use('/api/mobile', mobileRoutes);
app.use('/api/user', userRoutes);

module.exports = app;