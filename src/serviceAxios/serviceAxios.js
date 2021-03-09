import axios from 'axios'

function findAll() {
    return axios
      .get('https://api.le-systeme-solaire.net/rest/bodies')
      .then(response => response.data.bodies)
      .catch(error => {
        console.log(error)
      })
}


function find(id) {
    return axios
      .get('https://api.le-systeme-solaire.net/rest/bodies' + id)
      .then(response => response.data.bodies)
      .catch(error => {
        console.log(error)
      })
}

export default {
    findAll,
    find
}
  