<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  .section {
    display: block;
    position: relative;
    padding: 60px 0;
  }
</style>
