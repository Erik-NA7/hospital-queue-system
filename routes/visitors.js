var express = require('express');
var router = express.Router();
var Controller = require("../controller/visitors.controller")

// Visitors Database
/* Create new visitor */
router.post('/', Controller.create)

/* Get visitor list */
router.get('/', Controller.findAll)

/* Get a single visitor */
router.get('/:nama', Controller.findOne)

/* delete a visitor */
router.delete('/:id', Controller.deleteOne)

/* delete all record */
router.delete('/', Controller.deleteAll)

module.exports = router;