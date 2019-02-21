<template>
  <div id="app">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'
  import Footer from './partials/Footer.vue'
  export default {
    components: {
      Header,
      Footer
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
    color: #0E1B32;
  }

  .section {
    display: block;
    position: relative;
    padding: 60px 0;
  }

  ::selection {
    color: #FFF;
    background-color: #FF6B3A;
  }
</style>
