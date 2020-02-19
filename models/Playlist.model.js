const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    genre: String,
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;