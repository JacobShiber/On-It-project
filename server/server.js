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

const userGradesRouter = require("./routes/users-grades-router");
const newsRouter=require('./routes/usersNews-router');
const ScheduleRouter=require('./routes/schedule-router');
const usersRouter = require('./routes/users-router');


app.use('/news', passport.authenticate("jwt",{session:false}),newsRouter)
app.use(passport.initialize());

app.use('/users', usersRouter);
app.use('/grades' , userGradesRouter);
app.use('/schedule',ScheduleRouter)



app.get('/', (req, res) => {
    res.status(200).send('Server is online');
})


app.listen(port);