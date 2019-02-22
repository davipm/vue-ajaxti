<template>
  <div class="home">
    <Slider/>
    <ContactSite/>
    <Solution/>
    <Number/>
    <Client/>
  </div>
</template>

<script>
  import Slider from '@/components/Slider.vue'
  import ContactSite from '@/components/ContactSite.vue'
  import Solution from '@/components/Solution.vue'
  import Client from '@/components/Client.vue'
  import Number from '@/components/Number.vue'
  export default {
    components: {
      Slider,
      ContactSite,
      Solution,
      Client,
      Number
    }
  }
</script>

<style lang="scss">

</style>
