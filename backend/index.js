require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const server = require('http').createServer(app);

//config

const port = 2737;
server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});