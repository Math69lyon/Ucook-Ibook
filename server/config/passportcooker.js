const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const Cooker = require('../models/Cooker')

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET

module.exports = (passport2) => {
    passport2.use(new jwtStrategy(opts, function (jwt_payload, done) {
        Cooker.findById(jwt_payload.id)
            .then(cooker => {
                if (cooker) {
                    return done(null, cooker)
                } else {
                    return done(null, false)
                }
            })
            .catch(err => {
                return done(err, false)
            })
    }))
}