const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); 

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send('Home');
});

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to DB')
);

//Booting Server - listening on port#
app.listen(port, () => {
    let date = new Date()
    console.log(`${date} - Server is listening on ${port}`)
});