//imports

require('dotenv/config');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
app.options('*', cors());
app.use(express.json());

//middleware

app.use(morgan('tiny'));
//app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

//router imports

const usersRouter = require('./routes/users');
const poemsRouter = require('./routes/poems');

//router setup

const api = process.env.API_URL;
app.use(`${api}/users`, usersRouter);
app.use(`${api}/poems`, poemsRouter);

//listenings

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: 'vanity'
})
.then(() => {
  console.log('MongoDB connection up and running.');
})
.catch((err) => {
  console.log('ERROR!: ', err);
});


const server = require('http').createServer(app);

//config

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});