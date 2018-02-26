import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router';
// import { routes } from '../server/routes';
import Mongo from 'mongodb';

import dbConfig from '../config/db';

import Main from './client';
import App from './components/App';
import AllPosts from './components/AllPosts';

const app = express();
const MongoClient = Mongo.MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(dbConfig.url, (err, database) => {
    console.log('Connected correctly to server');

    if (err) return console.log(err);

    app.get('/v1/posts', (req, res) => {
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
    app.use((req, res, next) => {
        const context = {};
        const html = ReactDom.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App />
            </StaticRouter>
        );

        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        }
        res.send(renderHTML(html));
        });

    const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

    function renderHTML(componentHTML) {
        return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>agafonova-ssr</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
    }

    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log(`Server listening on: ${PORT}`);
    });
});