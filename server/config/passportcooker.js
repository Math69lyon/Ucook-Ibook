const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/Cooker')

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET

module.exports = (passport) => {
    passport.use(new jwtStrategy(opts, function(jwt_payload, done) {
        User.findById(jwt_payload.id)
            .then(cooker => {
                if (cooker) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
            .catch(err => {
                return done(err, false)
            })
    }))
}