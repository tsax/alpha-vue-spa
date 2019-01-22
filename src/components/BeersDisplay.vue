<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="beer in beers" :key="beer.id">
      <div class="tile is-child box">
        <p class="title">{{ beer.name }}</p>
        <figure class="image is-1by3">
          <img v-bind:src="beer.image_url" style="max-width:100%; object-fit: scale-down;" >
        </figure>
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
