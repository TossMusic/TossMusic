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

  searchAlbums(query, limit = 12) {
    console.log(query)
    return this.API.get(`albums/?client_id=${process.env.client_id}${query}&limit=${limit}`)
      .then(res => {
        console.log(res.data.results, "resultado de busqueda de album")
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

  getAlbumDetails(id) {
    return this.API.get(`albums/tracks?client_id=${process.env.client_id}&id=${id}`)
      .then(res => {
        // console.log(res.data.results[0].tracks)
        return res.data.results[0]
      })
      .catch(err => console.log("error en search", err))
  }

  getTrackDetail(id) {
    return this.API.get(`tracks?client_id=${process.env.client_id}&id=${id}`)
      .then(res => {
        return res.data.results[0]
      })
      .catch(err => console.log("error en el track detail"))
  }

}

module.exports = JamendoApi