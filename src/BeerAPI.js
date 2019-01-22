export default {
  async searchBeers (beerName, abvGt, abvLt) {
    let beers = []

    let searchQuery = `beer_name=${encodeURIComponent(beerName)}`
    if (abvGt) {
      searchQuery += `&abv_gt=${encodeURIComponent(abvGt)}`
    }
    if (abvLt) {
      searchQuery += `&abv_lt=${encodeURIComponent(abvLt)}`
    }
    searchQuery += `&per_page=5`

    const response = await fetch(`https://api.punkapi.com/v2/beers?` + searchQuery)
    const json = await response.json()
    beers = json

    console.log(beers)
    return beers
  },

  async getRandomBeer () {
    let beers = []
    for (let i = 1; i <= 6; i++) {
      const response = await fetch(`https://api.punkapi.com/v2/beers/random`)
      const json = await response.json()
      beers.push(json[0])
    }

    return beers
  }
}
