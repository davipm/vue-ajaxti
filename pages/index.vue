<template>
  <div class="home">
    <Slider/>
    <ContactSite/>
    <Solution/>
  </div>
</template>

<script>
  import Slider from '../components/Slider.vue'
  import ContactSite from '../components/ContactSite.vue'
  import Solution from '../components/Solution.vue'
  export default {
    components: {
      Slider,
      ContactSite,
      Solution
    }
  }
</script>

<style lang="scss">

</style>
