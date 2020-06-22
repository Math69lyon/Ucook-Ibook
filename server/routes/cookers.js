const router = require('express').Router()
const Cooker = require('../models/Cooker')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const validCookerRegistrationInput = require('../validation/cookerregistration');
const validCookerConnectionInput = require('../validation/cookerconnection');

router.route('/cookerregistration')
    .post((req, res) => {
        const { isValid, errors } = validCookerRegistrationInput(req.body)

        if (!isValid) {
            return res.status(404).json(errors)
        }

        Cooker.findOne({ email: req.body.email })
            .then(cooker => {
                if (cooker) {
                    errors.email = 'This email is already exist'
                    return res.status(404).json(errors)
                }

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(req.body.password, salt, function(err, hash) {
                        const newCooker = new Cooker({
                            login: req.body.login,
                            email: req.body.email,
                            password: hash,
                            city: req.body.city
                        })

                        newCooker.save()
                            .then(newCooker => res.json(newCooker))
                            .catch(err => console.log(err))
                    })
                })
            })
    })

router.route('/cookerconnection')
    .post((req, res) => {
        const { errors, isValid } = validCookerConnectionInput(req.body)

        if (!isValid) {
            return res.status(404).json(errors)
        }

        Cooker.findOne({ login: req.body.login })
            .then(cooker => {
                if (cooker) {
                    bcrypt.compare(req.body.password, cooker.password)
                        .then(isMatch => {
                            if (isMatch) {
                                const token = jwt.sign({ id: cooker._id }, process.env.SECRET, { expiresIn: '1d' }, function(err, token) {
                                    return res.json({
                                        success: true,
                                        token: token
                                    })
                                })
                            } else {
                                errors.password = 'Password is incorrect'
                                return res.status(404).json(errors)
                            }
                        })
                } else {
                    errors.login = 'Cooker not found'
                    return res.status(404).json(errors)
                }
            })
    })

router.route('/')
    .get( passport.authenticate('jwt', { session: false }),(req, res) => {
        console.log('herve')
        res.json({
            _id: req.cooker._id,
            login: req.cooker.login,
            email: req.cooker.email
        })
})

router.route('/Api')
    .get( passport.authenticate('jwt', { session: false }),(req, res) => {
        res.json({
            _id: req.user._id,
            login: req.user.login,
            email: req.user.email
        })
})

router.route('/about')
    .get( passport.authenticate('jwt', { session: false }),(req, res) => {
        res.json({
            _id: req.user._id,
            login: req.user.login,
            email: req.user.email
        })
})

router.route('/search')
    .post((req, res) => {
        Cooker.findOne({
                $or: [
                    { email: req.body.text },
                    { login: req.body.text }
                ]
            })
            .then(cooker => res.json({ cookerId: cooker._id }))
            .catch(err => res.status(404).json({ msg: 'Not found' }))
    })

module.exports = router