const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  id: String,
  name: String,
  duration: Number,
  artist_id: String,
  artist_name: String,
  artist_idstr: String,
  album_name: String,
  album_id: String,
  license_ccurl: String,
  position: Number,
  releasedate: String,
  album_image: String,
  audio: String,
  audiodownload: String,
  prourl: String,
  shorturl: String,
  shareurl: String,
  image: String,
}, {
  timestamps: true
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;