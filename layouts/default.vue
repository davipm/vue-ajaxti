<template>
  <div id="app">
    <Header/>
    <nuxt/>
    <Footer/>
    <BackToTop/>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'
  import Footer from './partials/Footer.vue'
  import BackToTop from '../components/BackToTop.vue'
  export default {
    components: {
      Header,
      Footer,
      BackToTop
    }
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
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

  .container-fluid {
    max-width: 1536px;
  }
</style>
