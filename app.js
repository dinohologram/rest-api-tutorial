const express = require('express');
const app = express();
const port = 3000
//routes 

app.get('/', (req, res) => {
    res.send('Welcome to Code Line Ranch HTTP root/home page');
});

app.get('/search', (req, res) => {
    res.send('Welcome to SEARCH @ Code Line Ranch HTTP server');
});

app.listen(port, () => {
    console.log(`Server is listening (to you) on ${port}`)
});