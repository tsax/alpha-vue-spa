<template>
  <div class="hello">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            PUNK API
          </h1>
          <h2 class="subtitle">
            {{ msg }}
          </h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <br />
        <b-field grouped>
          <b-input v-model="beer_name" placeholder="Search..." expanded></b-input>
          <p class="control">
          <button class="button is-primary" @click="this.searchBeers">Search</button>
          <span id="search-break"> </span>
          <button class="button is-primary" @click="this.getRandomBeers">Random</button>
          </p>
        </b-field>
      </div>
    </section>
    <section>
      <b-tabs position="is-centered" size="is-medium" class="block">
        <b-tab-item label="Searched Beers" >
          <BeersDisplay :onClick="favoriteBeer" v-bind:beers="this.results" />
        </b-tab-item>
        <b-tab-item label="Favorites!" >
          <BeersDisplay :onClick="unfavoriteBeer" v-bind:beers="this.favorites" />
        </b-tab-item>
      </b-tabs>
      <b-pagination
        :total="this.results.length"
        :current.sync="currentPage"
        order="is-centered"
        :per-page="5">
      </b-pagination>
    </section>
  </div>
</template>

<script>
import BeerAPI from '../BeerAPI'
import BeersDisplay from './BeersDisplay'
export default {
  name: 'PunkSearch',
  components: {
    BeersDisplay
  },
  props: {
    msg: String
  },
  data: function () {
    return {
      beer_name: '',
      abv_gt: '0',
      abv_lt: '20',
      currentPage: 1,
      results: [],
      noResults: false,
      searching: false,
      favorites: []
    }
  },
  methods: {
    searchBeers: function () {
      BeerAPI.searchBeers(this.beer_name, this.abv_gt, this.abv_lt)
        .then(beers => (this.results = beers))
    },
    getRandomBeers: function () {
      BeerAPI.getRandomBeer()
        .then(beers => (this.results = beers))
    },
    favoriteBeer: function (beer) {
      let index = this.favorites.find(b => b.id === beer.id)
      if (!index) {
        this.favorites.push(beer)
      }
    },
    unfavoriteBeer: function (beer) {
      let index = this.favorites.findIndex(b => b.id === beer.id)
      this.favorites.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  margin: 0 auto;
  width: 600px;
}
#search-break {
  margin-left: 5px;
}
/*
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
