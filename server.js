const express = require('express');
const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const ObjectID = require('mongodb').ObjectID;

const bodyParser     = require('body-parser');
const dbConfig = require('./config/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbConfig.url, (err, database) => {

    if (err) return console.log(err);

    app.get('/v1/posts', (req, res) => {
        database.collection('notes').find().toArray((err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.get('/v1/posts/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        database.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });

        database.close();
    });
    app.get('/v1/pages/:id', (req, res) => {
        const id = req.params.id;
        const details = { pages: id };
        database.collection('notes').find(details).toArray((err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.post('/v1/posts', (req, res) => {
        console.log(req);
        const noteBody = req.body;
        const note = {
            text: noteBody.text,
            title: noteBody.title,
            author: noteBody.author,
            pages: noteBody.pages,
            categories: noteBody.categories,
            date: noteBody.date,
            id: noteBody.id
        };
        database.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.use(express.static("public"));
    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => {
        console.log(`Server listening on: ${PORT}`);
    });
});