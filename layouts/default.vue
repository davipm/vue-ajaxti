<template>
  <div id="app">
    <!-- header -->
    <Header/>
    <!-- content -->
    <nuxt/>
    <!-- footer -->
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
