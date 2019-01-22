<template>
  <div id="app">
    <PunkSearch msg="Search your favorite micro-brews!"/>
  </div>
</template>

<script>
import PunkSearch from './components/PunkSearch.vue'

export default {
  name: 'app',
  components: {
    PunkSearch
  }
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
