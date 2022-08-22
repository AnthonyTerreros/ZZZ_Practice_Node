const {Sequelize, Op} = require('sequelize')
const express = require('express')
const Casa = require('../models').casas

const router = express.Router()

router.get("/valores/datos", (req, res) => {
    Casa.findAll()
    .then(casas => {
        res.send(casas)
    })
    .catch(err => res.status(400).send(err))
})

router.get("/valores/vista", (req, res) => {
    Casa.findAll()
    .then(casas => {
        res.render('casas', {
            casasArr: casas
        })
    })
    .catch(err => res.status(400).send(err))
})

module.exports = router
