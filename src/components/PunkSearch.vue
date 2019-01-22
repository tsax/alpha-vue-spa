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
        <h3 class="title">Search Beers</h3>
        <b-field grouped>
          <b-input v-model="beer_name" placeholder="Search..." expanded></b-input>
          <p class="control">
          <button class="button is-primary" @click="this.searchBeers">Search</button>
          <button class="button is-primary" @click="this.getRandomBeers">Random</button>
          </p>
        </b-field>
      </div>
    </section>
    <section>
      <b-tabs position="is-centered" size="is-medium" class="block">
        <b-tab-item label="Searched Beers" ></b-tab-item>
        <b-tab-item label="Favorites!" ></b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import BeerAPI from '../BeerAPI'
export default {
  name: 'PunkSearch',
  props: {
    msg: String
  },
  data: function () {
    return {
      beer_name: '',
      abv_gt: '0',
      abv_lt: '20',
      results: [],
      noResults: false,
      searching: false,
      favorites: []
    }
  },
  methods: {
    getRandomBeers: function () {
      let randomBeer = BeerAPI.getRandomBeer()
        .then(result => this.results.push(result))
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
