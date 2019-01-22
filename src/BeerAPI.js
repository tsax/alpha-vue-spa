import axios from 'axios'

export default {
  searchBeers (beerName, abvGt, abvLt) {
    console.log('HAHAHAHHA')
    let searchQuery = `beer_name=${beerName}`
    if (abvGt) {
      searchQuery += `abv_gt=${abvGt}`
    }
    if (abvLt) {
      searchQuery += `abv_lt=${abvLt}`
    }
    return axios.get('/beers' + searchQuery)
      .then(response => {
        return response.data
      })
  },

  getRandomBeer () {
    console.log('HAHAHAHHA')
    let randomBeers = []
    axios.get('/beers/random')
      .then(response => {
        randomBeers.push(response.data[0])
      })
    console.log(randomBeers)
  }
}
