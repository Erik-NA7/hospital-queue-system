const mongoose = require("mongoose");
const Schema = mongoose.Schema;
Visitor = new Schema (
  {
    nama: String,
    kategoriKunjungan: String,
    kategoriPasien: String,
    tanggalDaftar: String
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('Visitor', Visitor)