<template>
  <div id="app">
    <!-- header -->
    <Header/>
    <!-- content -->
    <section class="section page">
      <div class="container">
        <h3 class="title">Pagina interna</h3>
      </div>
    </section>
    <!-- footer -->
    <Footer/>
    <!-- back to top -->
    <BackToTop/>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'
  import Footer from './partials/Footer.vue'
  import BackToTop from '@/components/BackToTop.vue'
  export default {
    name: 'pageInternal',
    components: {
      Header,
      Footer,
      BackToTop,
    }
  }
</script>

<style scoped lang="scss">

</style>
