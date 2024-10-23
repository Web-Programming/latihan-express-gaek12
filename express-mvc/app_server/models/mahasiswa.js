const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  npm: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tanggal_lahir: {
    type: Date
  },
  aktif: {
    type: Boolean,
    default: true
  }
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;

et mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemaMhs = new mongoose.Schema({
  nama: String,
  npm: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  tanggal_lahir: {
    type: Date,
  },
  aktif: Boolean,
});

//create Model from Schema
mongoose.model("Mahasiswa", schemaMhs);