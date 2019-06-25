const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = 3333;

const { tracker } = require('./config/middleware');
const router = require('./config/routes');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(tracker);
server.use(router);

server.listen(port, () => `Listening http://localhost:${port}`);
