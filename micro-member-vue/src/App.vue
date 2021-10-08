<template>
  <div id="app">
    vue
    <router-view/>
  </div>
</template>
<script>
// import navMenu from '@/components/navMenu'

export default {
  name: 'App',
  components: {
    // navMenu
  },
  data() {
    return {
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
