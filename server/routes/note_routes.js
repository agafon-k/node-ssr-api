const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, database) {
    app.get('/v1', (req, res) => {
        res.send('<p>Hello World!</p>');
    });

    app.get('/v1/posts', (req, res) => {
        console.log('sasas');
        database.collection('notes').find().toArray((err, item) => {
            if (err) {
                res.send({ 'error':'An error has occurred' });
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
                res.send({ 'error':'An error has occurred' });
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
                res.send({ 'error':'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.post('/v1/posts', (req, res) => {
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
};