require('dotenv').config();
require('./db/index');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const passport = require('passport');
const passportMiddleware = require('./config/passport');

passportMiddleware(passport);

const usersRouter = require('./routes/users-router');

app.use(passport.initialize());

app.use('/users', usersRouter);


app.get('/', (req, res) => {
    res.status(200).send('Server is online');
})


app.listen(port)