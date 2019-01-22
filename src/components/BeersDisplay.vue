<template>
  <div class="tile is-ancestor">
    <div v-for="beer in beers" :key="beer.id">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">{{ beer.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeerDisplay',
  props: {
    beers: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
