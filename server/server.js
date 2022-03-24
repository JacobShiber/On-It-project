require('dotenv').config();
require('./db/index');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const path=require('path');

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
app.use('/grades' , passport.authenticate("jwt",{session:false}), userGradesRouter);
app.use('/schedule', passport.authenticate("jwt",{session:false}), ScheduleRouter)


app.listen(process.env.PORT);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}
console.log(process.env.NODE_ENV);

