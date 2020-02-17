class JamendoApi {
  constructor() {
    //propiedades
    this.API = axios.create({
      baseURL: 'https://api.jamendo.com/v3.0/'
    })
  }

  //metodos
}

module.exports = JamendoApi