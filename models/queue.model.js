const mongoose = require("mongoose");
const Schema = mongoose.Schema;

QueueNumbers = new Schema (
  {
    queueNumber: Number,
    kategoriKunjungan: String,
    displayNumber: String,
    tanggal: String
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('QueueNumbers', QueueNumbers)