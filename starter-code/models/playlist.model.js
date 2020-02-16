const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    song: Array,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},

);

const Playlist = mongoose.model('playlist', userSchema);
module.exports = Playlist;
