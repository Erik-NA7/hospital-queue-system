var express = require('express');
var router = express.Router();
var Controller = require('../controller/queue.number.controller')


// Queue Number 
/* Create new queue number */
router.post('/', Controller.newNumber)

/* Get whole queue number */
router.get('/', Controller.getAllNumber)

/* Get next queue number */
router.get('/next', Controller.nextQueue)

router.delete('/',Controller.clearQueue)

module.exports = router;
