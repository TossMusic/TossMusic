const axios = require('axios');

class JamendoApi {
  constructor() {
    //propiedades
    this.API = axios.create({
      baseURL: 'https://api.jamendo.com/v3.0/'
    })
  }

  //metodos
  getFullAlbums() {
    this.API.get(`albums/?client_id=${process.env.client_id}`)
      .then(res => {
        console.log(res.data.results)
      })
      .catch(err =>
        console.log("error en getFullAlbums", err))
  };

  getFullTracks() {
    return this.API.get(`tracks/?client_id=${process.env.client_id}`)
      .then(res => {
        // console.log(res.data.results)
        return res.data.results
      })
      .catch(err => console.log("error en getFullTracks", err))
  };

  search(searchText, genres) {
    return this.API.get(`tracks/?client_id=${process.env.client_id}&tags=${genres}`)
      .then(res => {
        // console.log(res.data.results)
        return res.data.results
      })
      .catch(err => console.log("error en search", err))
  }

  searchQuery(query, limit = 10) {
    return this.API.get(`tracks/?client_id=${process.env.client_id}${query}&limit=${limit}`)
      .then(res => {
        // console.log(res.data.results)
        return res.data.results
      })
      .catch(err => console.log("error en search", err))
  }

  searchSong() {

    return this.API.get(`tracks/?client_id=${process.env.client_id}&tags=${genres}`)
      .then(res => {
        // console.log(res.data.results)
        return res.data.results
      })
      .catch(err => console.log("error en search", err))

  }

  //   getTracksByGenre(genres) {
  //    this.API.get(`tracks/?client_id=${process.env.client_id}&tags={{genres}}`)  rock se pasaría por parametro cuando 
  //tengamos el filtro en la plantilla del search, pasandoselo a esta función

}

module.exports = JamendoApi