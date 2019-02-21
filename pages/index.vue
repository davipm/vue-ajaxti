<template>
  <div class="home">
    <Slider/>
    <ContactSite/>
    <Solution/>
    <Client/>
  </div>
</template>

<script>
  import Slider from '@/components/Slider.vue'
  import ContactSite from '@/components/ContactSite.vue'
  import Solution from '@/components/Solution.vue'
  import Client from '../components/Client.vue'
  export default {
    components: {
      Slider,
      ContactSite,
      Solution,
      Client
    }
  }
</script>

<style lang="scss">

</style>
