const express = require('express');
const { url } = require('inspector');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const app = express();
let db;
port = 8080;

mongoose.connect("mongodb+srv://admin:admin@demopage.egyjhzg.mongodb.net/", { useUnifiedTopology: true, useNewUrlParser: true });

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const click = { clickTime: new Date() };
    console.log(click);
    console.log(db);

    db.collection('clicks').save(click, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('Click added to db');
        res.sendStatus(201)
    });
});
MongoClient.connect(url, (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;

})
app.get("/", (req, res) => {
    res.send('Check server is running');
})

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, './' + '\index.html'));
});

app.listen(port, () => {
    console.log("Server Starting PORT : 8080");
})