const router = require('express').Router()
const User = require('../models/Cooker')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const validRegistrationInput = require('../validation/registration');
const validConnectionInput = require('../validation/connection');

router.route('/cookerregistration')
    .post((req, res) => {
        const { isValid, errors } = validRegistrationInput(req.body)

        if (!isValid) {
            return res.status(404).json(errors)
        }

        User.findOne({ email: req.body.email })
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

                        newUser.save()
                            .then(newCooker => res.json(newCooker))
                            .catch(err => console.log(err))
                    })
                })
            })
    })

router.route('/connection')
    .post((req, res) => {
        const { errors, isValid } = validConnectionInput(req.body)

        if (!isValid) {
            return res.status(404).json(errors)
        }

        User.findOne({ login: req.body.login })
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
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
        res.json({
            _id: req.cooker._id,
            login: req.cooker.login,
            email: req.cooker.email
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