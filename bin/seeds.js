// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Song = require("../models/Song.model");

const bcryptSalt = 10;

mongoose
  .connect(`mongodb://localhost/TossMusic`, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [{
    username: "sara",
    password: bcrypt.hashSync("sara", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "user2",
    password: bcrypt.hashSync("user2", bcrypt.genSaltSync(bcryptSalt)),
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


const songs = [{
    id: "169",
    name: "Trio HxC",
    duration: 101,
    artist_id: "7",
    artist_name: "TriFace",
    artist_idstr: "triface",
    album_name: "Premiers Jets",
    album_id: "24",
    license_ccurl: "",
    position: 2,
    releasedate: "2004-12-17",
    album_image: "https://imgjam2.jamendo.com/albums/s0/24/covers/1.200.jpg",
    audio: "https://mp3l.jamendo.com/?trackid=169&format=mp31&from=app-decdc402",
    audiodownload: "https://mp3d.jamendo.com/download/track/169/mp32/",
    prourl: "",
    shorturl: "https://jamen.do/t/169",
    shareurl: "https://www.jamendo.com/track/169",
    image: "https://imgjam2.jamendo.com/albums/s0/24/covers/1.200.jpg"
  },
  {
    "id": "1404961",
    "name": "LOVE",
    "duration": 189,
    "artist_id": "495923",
    "artist_name": "Luis Alfonso",
    "artist_idstr": "Luis_Alfonso",
    "album_name": "MUSIC SOUNDTRACKS vol.1 2016",
    "album_id": "164277",
    "license_ccurl": "http://creativecommons.org/licenses/by-nc-sa/3.0/",
    "position": 9,
    "releasedate": "2016-12-22",
    "album_image": "https://imgjam1.jamendo.com/albums/s164/164277/covers/1.200.jpg",
    "audio": "https://mp3l.jamendo.com/?trackid=1404961&format=mp31&from=app-decdc402",
    "audiodownload": "https://mp3d.jamendo.com/download/track/1404961/mp32/",
    "prourl": "https://licensing.jamendo.com/track/1404961",
    "shorturl": "https://jamen.do/t/1404961",
    "shareurl": "https://www.jamendo.com/track/1404961",
    "image": "https://imgjam1.jamendo.com/albums/s164/164277/covers/1.200.jpg"
  }, {
    "id": "1479010",
    "name": "Insane Love",
    "duration": 325,
    "artist_id": "440580",
    "artist_name": "AudioMagma",
    "artist_idstr": "AudioMagma",
    "album_name": "Insane Love Angel and Devil",
    "album_id": "171112",
    "license_ccurl": "http://creativecommons.org/licenses/by-nc-nd/3.0/",
    "position": 1,
    "releasedate": "2017-09-14",
    "album_image": "https://imgjam1.jamendo.com/albums/s171/171112/covers/1.200.jpg",
    "audio": "https://mp3l.jamendo.com/?trackid=1479010&format=mp31&from=app-decdc402",
    "audiodownload": "https://mp3d.jamendo.com/download/track/1479010/mp32/",
    "prourl": "https://licensing.jamendo.com/track/1479010",
    "shorturl": "https://jamen.do/t/1479010",
    "shareurl": "https://www.jamendo.com/track/1479010",
    "image": "https://imgjam1.jamendo.com/albums/s171/171112/covers/1.200.jpg"
  }, {
    "id": "276548",
    "name": "Happy Lovesong",
    "duration": 178,
    "artist_id": "347296",
    "artist_name": "The Novel",
    "artist_idstr": "The_Novel",
    "album_name": "Last Day in Heaven",
    "album_id": "38930",
    "license_ccurl": "http://creativecommons.org/licenses/by-nc-sa/3.0/",
    "position": 5,
    "releasedate": "2009-01-21",
    "album_image": "https://imgjam1.jamendo.com/albums/s38/38930/covers/1.200.jpg",
    "audio": "https://mp3l.jamendo.com/?trackid=276548&format=mp31&from=app-decdc402",
    "audiodownload": "https://mp3d.jamendo.com/download/track/276548/mp32/",
    "prourl": "https://licensing.jamendo.com/track/276548",
    "shorturl": "https://jamen.do/t/276548",
    "shareurl": "https://www.jamendo.com/track/276548",
    "image": "https://imgjam1.jamendo.com/albums/s38/38930/covers/1.200.jpg"
  }
]

Song.insertMany(songs)