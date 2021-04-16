require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./DataBase');

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);


server.listen(process.env.NODE_PORT, () => console.log('Bunnies hole at running...'))