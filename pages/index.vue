<template>
  <div class="home">
    <Video/>
    <Solution/>
    <Products/>
    <Client/>
    <Testimony/>
  </div>
</template>

<script>
  import Video from '@/components/VideoComponent.vue'
  import Solution from '@/components/Solution.vue'
  import Products from '@/components/Products.vue'
  import Client from '@/components/Client.vue'
  import Testimony from '../components/Testimony.vue'
  export default {
    components: {
      Video,
      Solution,
      Products,
      Client,
      Testimony
    }
  }
</script>
