const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    song: Array,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
