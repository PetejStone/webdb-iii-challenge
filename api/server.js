const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cohortsRouter = require('../cohorts/cohortsRouter.js')
//const studentsRouter = require('../students/studentsRouter.js')
const server = express();
//const cors = require('cors');
//global middleware
server.use(express.json());
server.use(helmet());
server.use(logger)
//server.use(cors())
server.use('/api/cohorts',  cohortsRouter);
//server.use('/api/students',  studentsRouter);

server.get('/', (req, res) => {
    res.send('server is working!')
});

function logger(req, res, next) {
  console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
  next();
};



module.exports = server;