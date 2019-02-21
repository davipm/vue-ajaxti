<template>
  <div class="home">
    <Slider/>
    <ContactSite/>
  </div>
</template>

<script>
  import Slider from '../components/Slider.vue'
  import ContactSite from '../components/ContactSite.vue'
  export default {
    components: {
      Slider,
      ContactSite
    }
  }
</script>

<style lang="scss">

</style>
