const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/stuff')
    .then(() => {
        console.log('MongoDb connected');
    })
    .catch((error) => {
        console.log('Cant connect to mongo');
        console.log(error);
    });

const app = express();

app.use(cors());


const bodyParser = require('body-parser');

app.get('/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
});


app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;