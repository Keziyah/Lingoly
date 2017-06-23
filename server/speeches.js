const db = require('../db') //this is required
const Speech = require('../db/models/speech');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Speech.findAll({})
    .then(speeches => res.send(speeches))
    .catch(next)
});

router.post('/', function(req, res, next) {
    console.log("REQ", req.body)
    Speech.create({content: req.body.content})
    .then(speech => {
      res.send(speech)
    })
    .catch(next)
});

module.exports = router;