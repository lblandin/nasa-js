import axios from 'axios'

function findAll() {
  return axios
    .get('https://api.le-systeme-solaire.net/rest/bodies')
    .then(response => response.data.bodies)
    .catch(error => {
      console.log(error)
    })
}


function findById(id) {
  return axios
    .get('https://api.le-systeme-solaire.net/rest/bodies/' + id)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

function findMoons(moon) {
  return axios
    .get(moon)
    .then(response => response.data)
    .catch (error => {
      console.log(error)
    })
}


export default {
  findAll,
  findById,
  findMoons
}
  