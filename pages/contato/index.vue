<template>
  <section class="section page">
    <div class="container">
      <iframe src="http://ajaxtiapi.local/contato/"
              frameborder="0"
      ></iframe>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  iframe {
    display: block;
    position: relative;
    width: 100%;
    height: 570px;
    border: none;
    @media (max-width: 768px) {
      height: 710px;
    }
    @media (max-width: 576px) {
      height: 750px;
    }
  }
</style>
