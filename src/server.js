import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router'
import { routes } from "./routes"
import Mongo from 'mongodb';

import dbConfig from '../config/db';

import Main from './client';

const app = express();
const MongoClient = Mongo.MongoClient;

MongoClient.connect(dbConfig.url, (err, database) => {
    console.log("Connected correctly to server");

    if (err) return console.log(err);
    app.use((req, res) => {
        const context = {};
        const html = ReactDom.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <Main />
            </StaticRouter>
        );

        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        } else {
            res.send(renderHTML(html));
        }

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