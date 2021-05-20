require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const users = require('./api/users');
const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('hello!!!'))
app.use('/restaurants', users)
app.use(errorHandler);

app.listen(PORT, () => console.log('Started up server on http://localhost:5000'.rainbow.bold.inverse))