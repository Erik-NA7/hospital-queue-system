const QueueNumber = require('../models/queue.model')

//Date formatter
const formatLocal = new Intl.DateTimeFormat(
  'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  }
);

// create new queue number
const nextNumber = (number) => {
  if (number >= 100) {
    return `${number}`
  }  
  if (number <= 9) {
    return `00${number}`
  }  
  if (9 < number < 100) {
    return `0${number}`
  }
}

exports.newNumber = async (req, res) => {
  if (!req.body) {
    res.status(400).send({message: "Can't request new number visitor, check your data"});
    return;
  } 
  var date = new Date()
  var cat = await req.body.kategoriKunjungan
  await QueueNumber.find({"kategoriKunjungan": cat})
  .then(data => {
    if (data.length === 0) {
      var newQueue = new QueueNumber({
        queueNumber: 1,
        kategoriKunjungan: cat,
        displayNumber: cat + nextNumber(1),
        tanggal: formatLocal.format(date)
      })
      newQueue.save(() => {
        res.json(newQueue)  
      })
    } else {
      var lastNumber = data[data.length - 1].queueNumber
      var newQueue = new QueueNumber({
        queueNumber: lastNumber + 1,
        kategoriKunjungan: cat,
        displayNumber: cat + nextNumber(lastNumber + 1),
        tanggal: formatLocal.format(date)
      })
      newQueue.save(() => {
        res.json(newQueue)  
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })
}

exports.getAllNumber = async (req, res) => {
  await QueueNumber.find()
  .then((data) => {
    res.json(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })
}

exports.nextQueue = async (req, res) => {
  await QueueNumber.find()
  .then(data => {
    if (data.length === 0) {
      res.status(300).send({
        message: "Queue is empty"
      })
    }
    res.json(data[data.length - 1])
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })
}

exports.clearQueue = async (req, res) => {
  await QueueNumber.deleteMany()
  .then(
    res.send({message: "Queue List Cleared"})
  )
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to clear the queue"
    })
  })
}