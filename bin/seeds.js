// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Song = require("../models/Song.model");

const bcryptSalt = 10;

mongoose
  .connect((`${process.env.DB_REMOTE}`, {
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
    username: "luz",
    password: bcrypt.hashSync("luz", bcrypt.genSaltSync(bcryptSalt)),
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
}]

Song.insertMany(songs)