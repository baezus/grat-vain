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

//multer setup

//multer
const multer = require('multer');
let filter = {};

const FILE_TYPE_MAP = {
  'application/pdf': 'pdf',
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error('invalid file type');
    if (isValid) {
      uploadError = null;
    }
    cb(null, 'public/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage });

//router imports

const usersRouter = require('./routes/users');
const poemsRouter = require('./routes/poems');
const profilesRouter = require('./routes/profiles');

//router setup

const api = process.env.API_URL;
app.use(`${api}/users`, usersRouter);
app.use(`${api}/poems`, poemsRouter);
app.use(`${api}/profiles`, profilesRouter);

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


app.post('/upload', upload.single("file"), (req, res) => {
  let file = req.file;
  console.log('reached the right route');
  console.log('file: ', req.file)
  return res.send(req.file);
});

const server = require('http').createServer(app);

//config

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});