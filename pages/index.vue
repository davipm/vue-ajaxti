<template>
  <div class="home">
    <Video/>
    <!--<Slider/>-->
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
  import Video from '@/components/VideoComponent.vue'
  export default {
    components: {
      Slider,
      ContactSite,
      Solution,
      Client,
      Number,
      Woman,
      Products,
      Video
    }
  }
</script>
