<template>
  <div class="home">
    <Slider/>
    <ContactSite/>
    <Solution/>
    <Products/>
    <Number/>
    <Woman/>
    <Client/>
  </div>
</template>

<script>
  import Slider from '@/components/Slider.vue'
  import ContactSite from '@/components/ContactSite.vue'
  import Solution from '@/components/Solution.vue'
  import Client from '@/components/Client.vue'
  import Number from '@/components/Number.vue'
  import Woman from '@/components/Woman.vue'
  import Products from '@/components/Products.vue'
  export default {
    components: {
      Slider,
      ContactSite,
      Solution,
      Client,
      Number,
      Woman,
      Products
    }
  }
</script>

<style lang="scss">

</style>
