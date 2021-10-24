const Visitor = require('../models/visitor.model')

//Date formatter
const formatLocal = new Intl.DateTimeFormat(
  'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  }
);

// create a new visitor
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({message: "Can't register visitor, check your data"});
    return;
  }
  var date = new Date()
  var visitor = new Visitor ({
    nama: req.body.nama,
    kategoriKunjungan: req.body.kategoriKunjungan,
    kategoriPasien: req.body.kategoriPasien,
    tanggalDaftar: formatLocal.format(date)
  })
  try {
    visitor.save(() => {
      res.json(visitor)
    })  
  }
  catch {
    res.status(500).send({
      message: err.message || "Error occured when trying to save data"
    })
  }
}

// get all visitors on the queue
exports.findAll = async (req, res) => {
  await Visitor.find()
  .then(visitors => {
    res.json(visitors)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })
}

// get a visitor by name
exports.findOne = async (req, res) => {
  await Visitor.find({"nama": req.params.nama})
  .then(visitor => {
    res.json(visitor)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })
}

// get all visitors of one category
exports.byCat = async (req, res) => {
  await Visitor.find({"kategoriKunjungan": req.params.cat})
  .then(category => {
    res.json(category)    
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })  
}

exports.nextQueue = async (req, res) => {
  await Visitor.find({"kategoriKunjungan": req.params.cat})
  .then(category => {
    res.json(category[0])    
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured when trying to retrieve data"
    })
  })  
}

// Dequeue a visitor upon completing the visit (unassigned queue number)
exports.dequeue = async (req, res) => {
  await Visitor.findOneAndUpdate (
    { nomorAntri: req.params.nomorAntri }, { nomorAntri: "dequeued" }
  )
  .then(
    res.send({message: `${req.params.nomorAntri} Finished`})
  )
  .catch(err => {
    res.send({
      message: err.message || "Error occured when trying to delete the data"})
  })
}

exports.deleteOne = async (req, res) => {
  await Visitor.findByIdAndDelete(req.params.id)
  .then(
    res.send({'message': 'deleted'})
  )
  .catch(err => {
    res.send({
      message: err.message || "Error occured when trying to delete the data"})
  })
}

// Clear visitors data
exports.deleteAll = async (req, res) => {
  await Visitor.deleteMany()
  .then(
    res.send({message: "Visitors List Cleared"})
  )
  .catch(err => {
    res.send({
      message: err.message || "Error occured when trying to delete the data"
    })
  })
}