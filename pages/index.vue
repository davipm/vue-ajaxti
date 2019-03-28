<template>
  <div class="home">
    <Video/>
    <Solution/>
    <Products/>
    <Client/>
  </div>
</template>

<script>
  import Video from '@/components/VideoComponent.vue'
  import Solution from '@/components/Solution.vue'
  import Products from '@/components/Products.vue'
  import Client from '@/components/Client.vue'
  export default {
    components: {
      Video,
      Solution,
      Products,
      Client,
    }
  }
</script>
