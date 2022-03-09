const jwtStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;
const users = require('../models/users');

const options = {
    secretOrKey : process.env.SECRET_KEY
}

options.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();


const passport = (passportArgument) => {
    passportArgument.use(new jwtStrategy(options, (jwtToken_payload, done) => {
        users.findById(jwtToken_payload._doc._id)
            .then(user => {
                if (user) return done(null, user);
                return done(null, false);
            }
            )
            .catch(err => done(err, false));
    }))
}

module.exports = passport;